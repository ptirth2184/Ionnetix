import type { Metadata } from "next"
import About from "@/views/About"
import { getSiteUrl } from "@/lib/site-url"

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	title: "About Ionnetix Technologies | Digital Agency in Ahmedabad",
	description:
		"Ionnetix Technologies is a specialized digital agency in Ahmedabad delivering high-performance websites, custom logo design, viral reels, and social media management.",
	keywords: [
		"about Ionnetix",
		"Ionnetix Technologies",
		"digital agency Ahmedabad",
		"web development startup India",
		"social media content creators Ahmedabad",
		"creative agency Gujarat",
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