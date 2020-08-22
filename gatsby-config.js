module.exports = {
  siteMetadata: {
    title: `Ange Pagel`,
    description: `Ange Pagel's personal website.`,
    author: `Ange Pagel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts-markdown`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.js`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      "resolve": `gatsby-transformer-remark`,
      "options": {
        "excerpt_separator": `<!-- end excerpt -->`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ange Pagel's personal website`,
        short_name: `Ange Pagel`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/content/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
