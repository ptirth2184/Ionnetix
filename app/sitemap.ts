import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-url"

const siteUrl = getSiteUrl()

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/contact"]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
