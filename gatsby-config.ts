// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
require('dotenv').config({
  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
  path: `.env.${process.env.NODE_ENV}`,
})

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  siteMetadata: {
    title: `Andrew Schwartz`,
    description: `The personal website of Andrew Schwartz.`,
    author: `Andrew Schwartz`,
    siteUrl: 'https://aschwartz.me',
    siteName: 'aschwartz.me',
    keywords: [
      'Andrew',
      'Schwartz',
      'Andrew Schwartz',
      'Design',
      'Software',
      'Colorado',
      'Engineer',
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name '__dirname'.
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name '__dirname'.
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-yaml-plus`,
      options: {
        enableRemark: true,
        markdownPreface: 'md//',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://aschwartz.me`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrew Schwartz`,
        short_name: `Andrew Schwartz`,
        start_url: `/`,
        background_color: `#31BBCF`,
        theme_color: `#31BBCF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
        apiKey: process.env.AIRTABLE_API_KEY,
        // concurrency: 5, // default, see using markdown and attachments for more information FIXME: delete this line?
        tables: [
          {
            // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Books`,
          },
        ],
      },
    },
  ],
}
