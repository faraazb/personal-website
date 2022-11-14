import {graphql, useStaticQuery} from "gatsby"

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                siteUrl
                description
                twitter {
                    card
                    creator
                }
            }
        }
        allFile(filter: {name: {eq: "faraaz"}}) {
            edges {
                image: node {
                    publicURL
                }
            }
        }
    }
  `)
    return {...data.site.siteMetadata, image: data.allFile.edges[0].image.publicURL};
}
