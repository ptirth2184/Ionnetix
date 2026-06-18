import type { Metadata } from "next"
import About from "@/views/About"
import { getSiteUrl } from "@/lib/site-url"

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	title: "About Ionnetix Technologies | IT Services Company in Ahmedabad",
	description:
		"Ionnetix Technologies is a young, driven IT services startup in Ahmedabad building modern websites, mobile apps, and digital marketing campaigns for businesses across India.",
	keywords: [
		"about Ionnetix",
		"Ionnetix Technologies",
		"IT services company Ahmedabad",
		"web development startup India",
		"digital solutions Ahmedabad",
		"tech startup Gujarat",
	],
	alternates: {
		canonical: "/about",
	},
}

const siteUrl = getSiteUrl()

const breadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
		{ "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
	],
}

export default function AboutPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<About />
		</>
	)
}