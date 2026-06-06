import type { Metadata } from "next"
import Contact from "@/views/Contact"

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	title: "Contact",
	description:
		"Contact Ionnetix Technologies to discuss your next IT, automation, or digital transformation project.",
	alternates: {
		canonical: "/contact",
	},
}

export default Contact