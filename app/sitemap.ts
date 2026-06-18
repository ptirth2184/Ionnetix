import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-url"

const siteUrl = getSiteUrl()

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about/", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/services/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact/", changeFrequency: "monthly" as const, priority: 0.7 },
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
