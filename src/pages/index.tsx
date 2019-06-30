import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'

import Layout from '@components/common/Layout'
import SEO from '@components/common/Seo'
import FeaturedNews from '@components/common/FeaturedNews'
import ThumbnailPost from '@components/common/ThumbnailPost'


// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
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

interface IndexPageProps {
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

class HomePage extends React.Component<IndexPageProps, {}> {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allPosts.edges')
    const featuredPost = posts.shift().node

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <StyledContainer>
          <SEO title="Mới nhất" />
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

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allPosts: allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          description {
            description
          }
          heroImage {
            sizes(maxWidth: 730, maxHeight: 490, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          publishDate(formatString: "DD/MM/YYYY")
          reference
          slug
        }
      }
    }
  }
`
