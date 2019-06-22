import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Layout from '@components/common/Layout'
import SEO from '@components/common/Seo'

interface INode {
  title: string
  slug: string
}

interface IBlogPostTemplateProps {
  pageContext: {
    slug: string
    previous: INode
    next: INode
  }
  location: ILocation
}

const StyledContainer = styled.div`
  padding: ${props => props.theme.rhythm(3/4)} ${props => props.theme.rhythm(3 / 4)};
  background-color: white;
  border-radius: 3px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  .header-container {
    h1 {
      margin-top: 0;
    }

    .published-date {
      ${props => ({
        ...props.theme.scale(-0.3)
      })}
      margin-top: ${props => props.theme.rhythm(-0.75)};
      color: ${props => props.theme.colors.gray600};
    }
  }

  .body-container {
    blockquote {
      border-left-color: ${props => props.theme.colors.secondary};
    }

    img {
      width: 100%;
    }
  }

  .reference-container {
    display: flex;
    justify-content: flex-end;
    font-style: italic;
    color: ${props => props.theme.colors.gray600};
  }
`

class BlogPostTemplate extends React.Component<IBlogPostTemplateProps, {}> {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <StyledContainer>
          <SEO
            title={post.title}
            description={post.description.description}
          />
          <div className="header-container">
            <h1>{post.title}</h1>
            <div className="published-date">
              {post.publishDate}
            </div>
          </div>
          <div className="body-container"
            dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
          />
          {post.reference && (
            <div className="reference-container">
              <div className="reference">Tham khảo&nbsp;</div>
              <div className="name">{post.reference}</div>
            </div>
          )}
        </StyledContainer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "DD/MM/YYYY")
      description {
        description
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      reference
    }
  }
`