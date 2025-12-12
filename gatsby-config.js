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
        schema: {
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
          typePrefix: 'Wp',
        },
        html: {
          useGatsbyImage: true,
        },
        production: {
          allow404Images: true,
        },
        type: {
          __all: {
            excludeFieldNames: ['blocksJSON', 'saveContent'],
          },
          RootQuery: {
            excludeFieldNames: [
              'viewer',
              'node',
              'schemaMd5',
              'allSettings',
              'discussionSettings',
              'generalSettings',
              'readingSettings',
              'writingSettings',
            ],
          },
          Plugin: {
            exclude: true,
          },
          Theme: {
            exclude: true,
          },
          EnqueuedScript: {
            exclude: true,
          },
          EnqueuedStylesheet: {
            exclude: true,
          },
          ActionMonitorAction: {
            exclude: true,
          },
          UserRole: {
            exclude: true,
          },
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
