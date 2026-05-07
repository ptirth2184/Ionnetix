import nodemailer from "nodemailer";
import { google } from "googleapis";
import { z } from "zod";

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

const rateLimitStore = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.enum(["web", "marketing", "app-development", "ai", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().default(""),
});

const serviceLabels: Record<ContactFormData["service"], string> = {
  web: "Web Development",
  marketing: "Digital Marketing",
  "app-development": "App Development",
  ai: "Website Maintenance",
  other: "Other",
};

type ContactFormData = z.infer<typeof contactSchema>;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData: ContactFormData = contactSchema.parse(body);

    if (validatedData.honeypot.trim()) {
      return Response.json(
        { error: "Request rejected" },
        { status: 400 }
      );
    }

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();
    const currentLimit = rateLimitStore.get(clientIp);

    if (!currentLimit || currentLimit.resetAt <= now) {
      rateLimitStore.set(clientIp, {
        count: 1,
        resetAt: now + RATE_LIMIT_WINDOW_MS,
      });
    } else {
      if (currentLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
        return Response.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }

      currentLimit.count += 1;
      rateLimitStore.set(clientIp, currentLimit);
    }

    // Verify SMTP credentials are configured
    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
      console.error("SMTP credentials not configured");
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send email to admin
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: "ptirth2184@gmail.com", // Admin email
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Service of Interest:</strong> ${serviceLabels[validatedData.service]}</p>
        <h3>Message:</h3>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Reply to: ${validatedData.email}</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Optional: append submission to Google Sheets if configured
    if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY && process.env.GOOGLE_SHEET_ID) {
      try {
        const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY as string);
        const auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        const sheets = google.sheets({ version: "v4", auth });

        const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";
        const values = [
          new Date().toISOString(),
          validatedData.name,
          validatedData.email,
          validatedData.phone,
          serviceLabels[validatedData.service],
          validatedData.message,
        ];

        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: `${sheetName}!A:F`,
          valueInputOption: "USER_ENTERED",
          requestBody: { values: [values] },
        });
      } catch (sheetErr) {
        console.error("Failed to append submission to Google Sheets:", sheetErr);
      }
    }

    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return Response.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
