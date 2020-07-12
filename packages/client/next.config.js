/* eslint-disable @typescript-eslint/no-var-requires */
const withGraphql = require('next-plugin-graphql');

const nextConfig = {
  distDir: 'dist'
};

module.exports = withGraphql(nextConfig);
