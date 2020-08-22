module.exports = {
  siteMetadata: {
    title: "Max Peterson",
    description: "A personal website for Max Peterson.",
    author: "Max Peterson",
    pages: [
      {
        name: "Home",
        route: "/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Max Peterson`,
        short_name: `Max Peterson`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}