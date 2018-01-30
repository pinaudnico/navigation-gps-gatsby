module.exports = {
  
  siteMetadata: {
    title: `Geolocalisation`,
  },
  
  plugins: [
            
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },

        {
    resolve: `gatsby-transformer-csv`,
    options: {
      noheader: true
      },
    },



    `gatsby-image`,

    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,

    `gatsby-transformer-remark`,
  
]
}
