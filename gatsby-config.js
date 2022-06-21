const path = require("path");


module.exports = {
  siteMetadata: {
      title: `Faraaz Biyabani`,
    siteUrl: `https://faraazb.github.io`
  },
  plugins: [
      `gatsby-plugin-sass`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-json`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: 'content',
              path: path.join(__dirname, 'content'),
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `media`,
              path: path.join(__dirname, 'src', 'static')
          },
      },
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `Faraaz Biyabani`,
              short_name: `FaraazB`,
              start_url: `/`,
              background_color: `#75a0a8`,
              theme_color: `#4f8bab`,
              display: `standalone`,
              icon: `src/static/images/icon-512x512.png`
          },
      },
  ]
};