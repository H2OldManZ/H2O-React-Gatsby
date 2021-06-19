module.exports = {
  siteMetadata: {
    title: "H2O Indiana",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wkizb7ssd9i9`,
        accessToken: "MYr7e_TZs-xJle-DYra5K04T8zTIJAkgf1BqtC_AqwY",
      },
    },

  ],
};
