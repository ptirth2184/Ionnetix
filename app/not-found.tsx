import type { Metadata } from "next"
import NotFound from "@/views/NotFound"

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	title: "Page Not Found | Ionnetix Technologies",
	description:
		"The page you are looking for does not exist. Return to the Ionnetix Technologies homepage to explore our web development, app development, and digital marketing services.",
	robots: {
		index: false,
		follow: true,
	},
}

export default NotFound