import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import get from 'lodash/get'

const StyledContainer = styled.div`
  .thumb {
    background-color: ${props => props.theme.colors.black600};
    padding: ${props => props.theme.rhythm(0.1)};

    img {
      margin-bottom: 0;
    }
  }

  a {
    text-shadow: none;
    background-image: none;
  }

  .content {
    display: inline-block;
    background-color: ${props => props.theme.colors.black600};
    padding: 0 ${props => props.theme.rhythm(0.3)};

    h3 {
      margin-top: ${props => props.theme.rhythm(1 / 3)};
      margin-bottom: ${props => props.theme.rhythm(1 / 2)};
      color: white;
    }

    .info {
      ${props => ({
        ...props.theme.scale(- 0.4)
      })}
      color: ${props => props.theme.colors.gray500};
      margin-bottom: ${props => props.theme.rhythm(0.3)};
    }
  }
`

const FeaturedNews = () => {
  const data = useStaticQuery(featuredNewsQuery)
  const featuredPosts = get(data, 'featuredPost.edges')

  const {
    title,
    slug,
    heroImage,
    publishDate,
  } = featuredPosts[0].node

  return (
    <StyledContainer>
      <Link to={`/${slug}`}>
        <div className="thumb">
          <Image sizes={heroImage.sizes} alt="" />
        </div>
        <article className="content">
          <h3>{title}</h3>
          <div className="info">{publishDate}</div>
        </article>
      </Link>
    </StyledContainer>
  )
}

const featuredNewsQuery = graphql`
  query FeaturedNewsQuery {
    featuredPost: allContentfulBlogPost(
      filter: {
        tags: { eq: "featured" }
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

export default FeaturedNews
