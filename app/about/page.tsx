import type { Metadata } from "next"
import About from "@/views/About"

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	title: "About",
	description:
		"Learn about Ionnetix Technologies, our mission, and how we deliver practical, future-ready digital solutions.",
	alternates: {
		canonical: "/about",
	},
}

export default About