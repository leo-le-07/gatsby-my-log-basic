import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import get from 'lodash/get'

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
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <StyledContainer>
          <SEO title="All posts" />
          <div className="featured-container">
            <FeaturedNews />
          </div>
          <div className="thumbnail-post-container">
            {posts.map(({ node }) => {
              return (
                <ThumbnailPost
                  key={node.slug}
                  title={node.title}
                  slug={node.slug}
                  heroImage={node.heroImage}
                  description={node.description.description}
                  publishDate={node.publishDate}
                />
              )
            })}
          </div>
          {/* {posts.map(({ node }) => {
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
          })} */}
        </StyledContainer>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          tags
          description {
            description
          }
          heroImage {
            sizes(maxWidth: 252, maxHeight: 169, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          publishDate(formatString: "MMMM Do, YYYY")
          reference
          slug
        }
      }
    }
  }
`
