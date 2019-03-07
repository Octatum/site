require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    titleTemplate: `%s - Octatum desarrollo web`,
    defaultTitle: `Octatum desarrollo web`,
    description: `Desarrollo web empresarial`,
    author: `contacto@octatum.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'n0npyriq',
        dataset: 'projects',
        token: process.env.GATSBY_SANITY_KEY,
        watchMode: true,
      },
    },
    // 'gatsby-plugin-offline',
  ],
};
