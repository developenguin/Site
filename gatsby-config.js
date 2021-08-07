module.exports = {
  siteMetadata: {
    title: `Matthijs Rijken - Home`,
    description: `This is my personal website.`,
    author: `Matthijs Rijken`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-react-svg',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `matthijs-rijken-home`,
        short_name: `developenguin`,
        start_url: `/`,
        background_color: `#0b486b`,
        theme_color: `#0b486b`,
        display: `minimal-ui`,
        icon: `src/images/penguin_square.png`, // This path is relative to the root of the site.
      },
    }
  ]
}
