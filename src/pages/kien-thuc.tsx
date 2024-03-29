import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'

import Layout from '@components/common/Layout'
import SEO from '@components/common/Seo'
import FeaturedNews from '@components/common/FeaturedNews'
import ThumbnailPost from '@components/common/ThumbnailPost'

interface INode {
  slug: string
  title: string
  publishDate: string
  description: {
    description: string
  }
  heroImage: {
    sizes: {
      aspectRatio: number,
      src: string,
      srcSet: string,
      sizes: string,
    }
  }
}

interface IEdge {
  node: INode
}

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    },
    allPosts: {
      edges: IEdge[]
    }
  }
  location: ILocation
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

class KnowledgePage extends React.Component<IProps, {}> {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allPosts.edges')
    const featuredPost = get(this, 'props.data.featuredPost.edges')[0].node

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <StyledContainer>
          <SEO title="Kiến thức" />
          <div className="featured-container">
            <FeaturedNews
              title={featuredPost.title}
              slug={featuredPost.slug}
              heroImage={featuredPost.heroImage}
              publishDate={featuredPost.publishDate}
            />
          </div>
          <div className="thumbnail-post-container">
            {posts.map(({ node }: { node: INode }) => {
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
        </StyledContainer>
      </Layout>
    )
  }
}

export default KnowledgePage

export const pageQuery = graphql`
  query KnowledgePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allPosts: allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      filter: {
        tags: { eq: "knowledge" }
      }
    ) {
      edges {
        node {
          title
          description {
            description
          }
          heroImage {
            sizes(maxWidth: 252, maxHeight: 169, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          publishDate(formatString: "DD/MM/YYYY")
          reference
          slug
        }
      }
    }
    featuredPost: allContentfulBlogPost(
      filter: {
        tags: { eq: "featured-knowledge" }
      }
    ) {
      edges {
        node {
          title
          heroImage {
            sizes(maxWidth: 670, maxHeight: 400, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          publishDate(formatString: "DD/MM/YYYY")
          slug
        }
      }
    }
  }
`
