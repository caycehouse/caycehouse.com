import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Cayce House`,
    description: `The personal site for Cayce House.`,
    twitterUsername: `@caycehouse`,
    image: `/logo.png`,
    siteUrl: `https://www.caycehouse.com`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

export default config
