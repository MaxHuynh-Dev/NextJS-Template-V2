import { PROD_ENV } from "@Constants/envs";
import path from "node:path";
import withPWA from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_APP_ENV === PROD_ENV;
const nextConfig: NextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
		additionalData: `@use "@Styles/tool.scss" as *;`,
	},
	images: {
		minimumCacheTTL: 3600,
		remotePatterns: [
			{
				protocol: "http",
				hostname: "127.0.0.1",
				port: "1337",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
};

export default async () => {
	if (isProd) {
		return withPWA({
			dest: "public",
			workboxOptions: {
				disableDevLogs: true,
			},
		})(nextConfig);
	}
	return nextConfig;
};
