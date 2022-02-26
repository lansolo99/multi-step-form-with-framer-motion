const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

const nextConfiguration = {
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true
    }
};
module.exports = withPlugins([[withBundleAnalyzer]], nextConfiguration);
