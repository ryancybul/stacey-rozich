require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Stacey Rozich`,
    description: `Artist, illustrator and muralist.`,
    author: `@ryanon1on`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.WPGRAPHQL_URL,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        minimizeDeprecationNotice: true,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/media',
          '**/tags',
          '**/taxonomies',
          '**/users',
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stacey Rozich`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/BIRB_CawCaw.png`,
      },
    },
  ],
  flags: {
    LAZY_IMAGES: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
};
