require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Robosoc Landing Page`,
    description: `The world's first SOC Virtual cyber analyst`,
    author: `@cybear`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /* eslint-disable @typescript-eslint/camelcase */
    `gatsby-plugin-manifest`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'ec5ntkypkzcl',
        accessToken: 't2oS0Ajo9mGwcHRB62JlWbuuTQdFRkXjKtE2soSmG4I',
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    /* eslint-enable @typescript-eslint/camelcase */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
