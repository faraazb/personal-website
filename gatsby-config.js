const path = require("path");


const siteUrl = process.env.NODE_ENV === "development" ?
    `http://localhost:8000` :
    `https://faraazbiyabani.me`

// noinspection HttpUrlsUsage
module.exports = {
    siteMetadata: {
        title: `Faraaz Biyabani`,
        siteUrl: siteUrl,
        description: `Software tinkerer, Associate software engineer at Contentstack`,
        twitter: {
            card: `summary`,
            creator: `@mfaraazb`
        }
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
