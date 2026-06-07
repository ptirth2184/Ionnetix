import type { Metadata } from "next"
import Services from "@/views/Services"
import { getSiteUrl } from "@/lib/site-url"

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	title: "Ionnetix Services | Web Development, App Development, Digital Marketing",
	description:
		"Explore Ionnetix web development, app development, digital marketing, and website maintenance services tailored to your business goals.",
	keywords: [
		"Ionnetix services",
		"web development",
		"app development",
		"digital marketing",
		"website maintenance",
	],
	alternates: {
		canonical: "/services",
	},
}

const siteUrl = getSiteUrl()

const breadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
		{ "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
	],
}

const serviceSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			name: "Ionnetix Technologies",
			url: siteUrl,
			logo: `${siteUrl}/favicon.png`,
		},
		{
			"@type": "WebPage",
			name: "Services | Ionnetix Technologies",
			url: `${siteUrl}/services`,
			description:
				"Ionnetix Technologies provides web development, app development, digital marketing, and website maintenance services.",
		},
		{
			"@type": "ItemList",
			name: "Ionnetix Services",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					item: {
						"@type": "Service",
						name: "Web Development",
						serviceType: "Website design and development",
						provider: {
							"@type": "Organization",
							name: "Ionnetix Technologies",
							url: siteUrl,
						},
						description:
							"Fast, responsive, and SEO-friendly websites built for performance and conversions.",
					},
				},
				{
					"@type": "ListItem",
					position: 2,
					item: {
						"@type": "Service",
						name: "Digital Marketing",
						serviceType: "SEO and online growth strategy",
						provider: {
							"@type": "Organization",
							name: "Ionnetix Technologies",
							url: siteUrl,
						},
						description:
							"Data-driven SEO and online growth strategies to increase visibility and reach.",
					},
				},
				{
					"@type": "ListItem",
					position: 3,
					item: {
						"@type": "Service",
						name: "App Development",
						serviceType: "Mobile app development",
						provider: {
							"@type": "Organization",
							name: "Ionnetix Technologies",
							url: siteUrl,
						},
						description:
							"Innovative mobile applications for iOS and Android that scale with your business.",
					},
				},
				{
					"@type": "ListItem",
					position: 4,
					item: {
						"@type": "Service",
						name: "Website Maintenance",
						serviceType: "Ongoing website maintenance and optimization",
						provider: {
							"@type": "Organization",
							name: "Ionnetix Technologies",
							url: siteUrl,
						},
						description:
							"Keep your website secure, up to date, and performing at its best with ongoing support.",
					},
				},
			],
		},
	],
}

export default function ServicesPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<Services />
		</>
	)
}