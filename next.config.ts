import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */

	images: {
		remotePatterns: [
			// 1. Configurazione per Cloudinary
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/**",
			},
			// 2. Configurazione per Placehold.co
			{
				protocol: "https",
				hostname: "placehold.co",
				port: "",
				pathname: "/**",
			},
		],
	},
};
export default nextConfig;
