import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../auth";

async function getSheetsClient() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY || !process.env.GOOGLE_SHEET_ID) throw new Error("Sheets not configured");
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY as string);
  const auth = new google.auth.GoogleAuth({ credentials, scopes: ["https://www.googleapis.com/auth/spreadsheets"] });
  const sheets = google.sheets({ version: "v4", auth });
  return { sheets, sheetId: process.env.GOOGLE_SHEET_ID, sheetName: process.env.GOOGLE_SHEET_NAME || "Sheet1" };
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return Response.json({ error: "Unauthorized" }, { status: 401 });

    const url = new URL(request.url);
    const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
    const pageSize = Math.max(1, Math.min(100, Number(url.searchParams.get("pageSize") || "10")));
    const q = (url.searchParams.get("q") || "").trim().toLowerCase();

    const { sheets, sheetId, sheetName } = await getSheetsClient();
    const range = `${sheetName}!A:Z`;
    const res = await sheets.spreadsheets.values.get({ spreadsheetId: sheetId, range });
    const values = res.data.values || [];
    const headers = values[0] || [];

    // Build rows with original sheet row numbers
    const allRows = values.slice(1).map((r, idx) => ({ row: idx + 2, values: r }));

    // Apply server-side search if provided
    const filtered = q
      ? allRows.filter(r => r.values.join(" ").toLowerCase().includes(q))
      : allRows;

    const total = filtered.length;
    const start = (page - 1) * pageSize;
    const paged = filtered.slice(start, start + pageSize);

    return Response.json({ headers, rows: paged, total, page, pageSize });
  } catch (err: any) {
    console.error(err);
    return Response.json({ error: err.message || String(err) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return Response.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const action = body?.action as string | undefined;
    const { sheets, sheetId, sheetName } = await getSheetsClient();

    if (action === "update") {
      const row = Number(body.row);
      const status = body.status || "";
      if (!row) return Response.json({ error: "Missing row" }, { status: 400 });
      // write status to column G
      const range = `${sheetName}!G${row}`;
      await sheets.spreadsheets.values.update({ spreadsheetId: sheetId, range, valueInputOption: "USER_ENTERED", requestBody: { values: [[status]] } });
      return Response.json({ success: true });
    }

    return Response.json({ error: "Unknown action" }, { status: 400 });
  } catch (err: any) {
    console.error(err);
    return Response.json({ error: err.message || String(err) }, { status: 500 });
  }
}
