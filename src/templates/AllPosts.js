import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
  SEO,
} from "../components/index"
import { H1, P } from "../elements/index"

const AllPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Container>
      <SEO></SEO>
      <FeatureImage />
      <Content>
        <H1 text-align="center" margin="0 0 1rem 0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </H1>
        <P color="dark2" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula
          ante, facilisis eget tincidunt quis, aliquam a nunc. Integer eleifend
          nunc eget neque suscipit ornare nec ac lacus.{" "}
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export default AllPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`
