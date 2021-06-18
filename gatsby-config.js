module.exports = {
  siteMetadata: {
    title: "H2O Indiana",
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: "https://api-us-east-1.graphcms.com/v2/ckq2dupkm0sm401xi64dl455a/master",
      },
    },

  ],
};
