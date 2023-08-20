const path = require("path");

const siteUrl =
  process.env.NODE_ENV === "development"
    ? `http://localhost:8000`
    : `https://faraazbiyabani.me`;

// noinspection HttpUrlsUsage
module.exports = {
  siteMetadata: {
    title: `Faraaz Biyabani`,
    siteUrl: siteUrl,
    description: `Software tinkerer, Associate software engineer at Contentstack`,
    twitter: {
      card: `summary`,
      creator: `@mfaraazb`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-gitinfo`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: path.join(__dirname, "src", "pages"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content",
        path: path.join(__dirname, "content"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: path.join(__dirname, "src", "static"),
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
        icon: `src/static/images/icon-512x512.png`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allFile(
            filter: {sourceInstanceName: {eq: "pages"}, relativePath: {regex: "/.js/"}}
          ) {
            edges {
              node {
                fields {
                  gitLogLatestDate
                }
                relativeDirectory
              }
            }
          }
        }`,
        resolvePages: ({
          allSitePage: { nodes: pages },
          allFile: { edges: files },
        }) => {
          return pages.map((page) => {
            const pageFile = files.find(({ node }) => {
              const fileName =
                node.relativeDirectory === ""
                  ? "/"
                  : `/${node.relativeDirectory}/`;
              return page.path === fileName;
            });

            return { ...page, ...pageFile?.node?.fields };
          });
        },
        serialize: ({ path, gitLogLatestDate }) => {
          return {
            url: path,
            lastmod: gitLogLatestDate,
          };
        },
        createLinkInHead: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://faraazbiyabani.me",
        sitemap: "https://faraazbiyabani.me/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
