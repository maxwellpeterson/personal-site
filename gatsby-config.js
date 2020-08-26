module.exports = {
  siteMetadata: {
    title:
      "Max Peterson | Computer Science Undergraduate at Northeastern University",
    description:
      "I'm an undergraduate student from San Francisco, CA studying computer science at Northeastern University in Boston, MA. This is a portfolio for some of the projects I've worked on.",
    image: "/full-logo-wrapped.png",
    url: "https://maxpeterson.cc",
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
        name: `Max Peterson | Computer Science Undergraduate at Northeastern University`,
        short_name: `Max Peterson`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/m-logo.png`,
      },
    },
  ],
}
