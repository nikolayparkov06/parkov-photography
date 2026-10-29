import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { servicePages } from "@/lib/service-pages";
import { siteUrl } from "@/lib/site-url";

const pages = [
  { path: "", priority: 1 },
  ...servicePages.map((page) => ({ path: `/${page.slug}`, priority: 0.9 })),
  { path: "/gallery", priority: 0.7 },
  { path: "/privacy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority }) =>
    routing.locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((alt) => [alt, `${siteUrl}/${alt}${path}`]),
        ),
      },
    })),
  );
}
