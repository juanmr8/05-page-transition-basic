import type { NextConfig } from 'next';

const config: NextConfig = {
	experimental: {
		viewTransition: true,
	},
  turbopack: {
    root: __dirname,
  },
};

export default config;
