const activeEnv = process.env.NODE_ENV;

require('dotenv').config({
  path: `./.env.${activeEnv}`,
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
        url: process.env.WORDPRESS_URL,
        verbose: true,
        html: {
          useGatsbyImage: true,
        },
        production: {
          allow404Images: true,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 200,
            },
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MC_ENDPOINT,
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Petit Formal Script`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
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
};
