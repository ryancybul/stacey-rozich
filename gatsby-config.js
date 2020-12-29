const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `./.env.${activeEnv}`,
});

console.log(`This WordPress Endpoint is used: '${process.env.WORDPRESS_URL}'`);

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
        baseUrl: '54.212.35.84',
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        minimizeDeprecationNotice: true,
        plugins: [
          {
            resolve: `@draftbox-co/gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `54.212.35.84`,
              protocol: `http`,
              wrapperStyle: ``,
              maxWidth: 650,
              postTypes: ['post'],
              withWebp: true, // enable WebP files generation
              useACF: false, // process <img> tags in ACF fields too
              // add any image sharp fluid options here
              // ...
            },
          },
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
