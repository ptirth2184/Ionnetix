import type { Metadata } from "next"
import Services from "@/views/Services"
import { getSiteUrl } from "@/lib/site-url"

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	title: "Ionnetix Services | Web Development, Design & Social Media in Ahmedabad",
	description:
		"Explore Ionnetix web development, logo design, reels creation, social media handling, and website maintenance services in Ahmedabad. Creative solutions built to grow your business online.",
	keywords: [
		"Ionnetix services",
		"web development Ahmedabad",
		"logo design Ahmedabad",
		"social media marketing Ahmedabad",
		"reels content creation agency India",
		"website maintenance India",
		"custom website development Gujarat",
		"Instagram management agency Ahmedabad",
		"hire web developers Ahmedabad",
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
						name: "Logo Design",
						serviceType: "Brand Identity and Logo Design",
						provider: {
							"@type": "Organization",
							name: "Ionnetix Technologies",
							url: siteUrl,
						},
						description:
							"Crafting memorable visual identities and custom logos that stand out in your industry.",
					},
				},
				{
					"@type": "ListItem",
					position: 3,
					item: {
						"@type": "Service",
						name: "Reels & Content Creation",
						serviceType: "Video Production and Content Creation",
						provider: {
							"@type": "Organization",
							name: "Ionnetix Technologies",
							url: siteUrl,
						},
						description:
							"Producing high-quality video content and engaging reels that capture attention.",
					},
				},
				{
					"@type": "ListItem",
					position: 4,
					item: {
						"@type": "Service",
						name: "Social Media Handling",
						serviceType: "Social Media Management",
						provider: {
							"@type": "Organization",
							name: "Ionnetix Technologies",
							url: siteUrl,
						},
						description:
							"End-to-end management of your social profiles to build community and generate leads.",
					},
				},
				{
					"@type": "ListItem",
					position: 5,
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