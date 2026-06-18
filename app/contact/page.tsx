import type { Metadata } from "next"
import Contact from "@/views/Contact"
import { getSiteUrl } from "@/lib/site-url"

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	title: "Contact Ionnetix Technologies | Get a Free Project Quote in Ahmedabad",
	description:
		"Contact Ionnetix Technologies in Ahmedabad to discuss your web development, app development, or digital marketing project. We respond within 24 hours.",
	keywords: [
		"contact Ionnetix",
		"Ionnetix contact",
		"project quote Ahmedabad",
		"IT services contact India",
		"hire web developer Ahmedabad",
		"free consultation web development",
	],
	alternates: {
		canonical: "/contact",
	},
}

const siteUrl = getSiteUrl()

const contactSchema = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Contact Ionnetix Technologies",
	url: `${siteUrl}/contact`,
	mainEntity: {
		"@type": "Organization",
		name: "Ionnetix Technologies",
		url: siteUrl,
		contactPoint: [
			{
				"@type": "ContactPoint",
				contactType: "sales",
				email: "ionnetixhr@gmail.com",
				telephone: "+91 88662 93636",
				areaServed: "IN",
				availableLanguage: ["en"],
			},
		],
	},
}

const breadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: siteUrl,
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Contact",
			item: `${siteUrl}/contact`,
		},
	],
}

export default function ContactPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<Contact />
		</>
	)
}