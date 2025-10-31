import { DOMAIN_URL } from "@Constants/common";
import { uiHelper } from "@Utils/uiHelper";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	if (!uiHelper.isProduction()) return [];
	return [
		{
			url: DOMAIN_URL || "http://localhost:3000",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
	];
}
