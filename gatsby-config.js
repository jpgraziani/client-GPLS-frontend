/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Green Patio Landscaping in Tucson, Arizona",
    description: "Landscape Company, Lawn Maintenance, Yard Care, Landscape Service, Hardscapes, Lawn Irrigation, Hardscape, Irrigation, Hardscaping, Lawn Mowing, Landscaping Company, Sprinkler Installation, Commercial Lawn Care, Residential Lawn Care, Tree Trimming, Tree and Shrub Pruning, Weed Control, Water Audits, Landscape Masonry, Annual Plantings",
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
