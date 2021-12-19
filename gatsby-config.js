/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Green Patio Landscaping in Tucson, Arizona",
    description: "Landscape Company, Lawn Maintenance, Lawn And Garden Care, Landscape Service, Lawn Irrigation, Irrigation, Lawn Mowing, Landscaping Company, Irrigation Installation, Residential Lawn Care, Tree Trimming, Tree and Shrub Pruning, Weed Control, Water Audits, Landscape Masonry, Annual Plantings, Routine Maintenance, Site Clean-ups",
    author: `@greenpatiolandscaping`,
    siteUrl: `https://www.greenpatiolandscaping.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ],
}
