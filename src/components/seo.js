import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const SEO = ({ description, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title || "MDX Blog"
        const metaImage = image || data.site.siteMetadata.image
        const metaUrl = url || data.site.siteMetadata.url
        const metaAuthor = author || data.site.siteMetadata.author
        const metaKeywords = ["gatsby"]

        return (
          <Helmet
            title={metaTitle}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `og:title`,
                content: metaTitle,
              },
              {
                name: `og:description`,
                content: metaDescription,
              },
              {
                name: `og:type`,
                content: "website",
              },
              {
                name: `og:image`,
                content: metaImage,
              },
              {
                name: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaAuthor,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          ></Helmet>
        )
      }}
    ></StaticQuery>
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        image
        url
        author
      }
    }
  }
`
