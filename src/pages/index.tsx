import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "@components/common/Layout"
import SEO from "@components/common/Seo"
import FeaturedNews from '@components/home/FeaturedNews'
import ThumbnailPost from '@components/common/ThumbnailPost'

import { rhythm } from "@utils/typography"

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface INode {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    description: string
  }
}

const StyledContainer = styled.div`
  .thumbnail-post-container {
    margin-top: ${props => props.theme.rhythm(1)};
  }

  /* Mobile Styles */
  @media only screen and (max-width: 600px) {
    .thumbnail-post-container {
      margin-top: 0;
    }
  }
`

interface IEdge {
  node: INode
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    },
    allMarkdownRemark: {
      edges: IEdge[]
    }
  }
  location: ILocation
}

class BlogIndex extends React.Component<IndexPageProps, {}> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <StyledContainer>
          <SEO title="All posts" />
          <div className="featured-container">
            <FeaturedNews />
          </div>
          <div className="thumbnail-post-container">
            <ThumbnailPost />
            <ThumbnailPost />
          </div>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </StyledContainer>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
