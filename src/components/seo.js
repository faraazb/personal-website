import React from "react"
import {useSiteMetadata} from "../hooks/use-site-metadata"

export const Seo = ({title, description, pathname, children}) => {
    const {title: defaultTitle, siteUrl, twitter, description: defaultDescription, image} = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername: twitter.creator,
        twitterCard: twitter.card
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta property="og:title" content={seo.title}/>
            <meta property="og:description" content={seo.description}/>
            <meta property="og:image" content={seo.image}/>
            <meta property="og:url" content={seo.url}/>
            <meta property="og:type" content="website"/>

            <meta name="twitter:card" content={seo.twitterCard}/>
            <meta name="twitter:title" content={seo.title}/>
            <meta name="twitter:url" content={seo.url}/>
            <meta name="twitter:description" content={seo.description}/>
            <meta name="twitter:image" content={seo.image}/>
            <meta name="twitter:creator" content={seo.twitterUsername}/>
            <meta name="twitter:site" content={seo.twitterUsername}/>
            {children}
        </>
    )
}
