// Public address of the live site, used for canonical links, sitemap and structured data.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://parkovvisuals.com"
).replace(/\/$/, "");
