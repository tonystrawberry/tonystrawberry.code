import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"
import { Container, Post, FeatureImage, SEO } from "../components/index"

const SinglePost = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
  const seoImage = data.mdx.frontmatter.featureImage.publicURL

  return (
    <Container>
      <SEO
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.frontmatter.excerpt}
      ></SEO>
      <FeatureImage fixed={featureImage} />
      <Post>
        <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        featureImage {
          publicURL
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
