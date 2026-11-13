import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["orrery-auth", "@orrery/core"],
};

export default nextConfig;
