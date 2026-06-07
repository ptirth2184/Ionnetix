export function getSiteUrl() {
	const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
	if (configuredUrl) {
		return configuredUrl.replace(/\/$/, "")
	}

	return "https://ionnetix.com"
}