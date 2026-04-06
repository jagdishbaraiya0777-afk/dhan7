import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/db";
import { siteUrl } from "@/app/_lib/siteUrl";

const SITE_URL = siteUrl();
const LAST_MODIFIED = new Date("2026-03-24T00:00:00.000Z");

const CORE_ROUTES = [
  { path: "/", changeFrequency: "daily" as const, priority: 1 },
  { path: "/dhan77-apk-download", changeFrequency: "daily" as const, priority: 0.95 },
  { path: "/dhan77-bonus", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/dhan77-login", changeFrequency: "weekly" as const, priority: 0.88 },
  { path: "/dhan77-review", changeFrequency: "weekly" as const, priority: 0.86 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.75 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.84 },
];

function buildLanguageAlternates(path: string) {
  const url = `${SITE_URL}${path}`;

  return {
    languages: {
      "en-IN": url,
      "en-US": url,
      "x-default": url,
    },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls: MetadataRoute.Sitemap = CORE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: buildLanguageAlternates(route.path),
  }));

  const posts = await getAllPosts();
  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.created_at,
    changeFrequency: "monthly" as const,
    priority: 0.78,
    alternates: buildLanguageAlternates(`/blog/${post.slug}`),
  }));

  return [...staticUrls, ...blogUrls];
}
