/** @type {import('next').NextConfig} */
module.exports = {
  future: {
    webpack5: true, // Enable Webpack 5
  },
  experimental: {
    modern: {
      scriptType: 'module', // Use module script type for modern bundles
    }
  },
};