import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

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

  return (
    <StyledContainer>
      <Link to="hi-folks">
        <div className="thumb">
          <Image
            fluid={data.featured.childImageSharp.fluid}
            alt="Featured 1"
          />
        </div>
        <article className="content">
          <h3>Shazam trên android có thể nhận diện được bài hát qua tai nghe</h3>
          <div className="info">18 phút trước</div>
        </article>
      </Link>
    </StyledContainer>
  )
}

const featuredNewsQuery = graphql`
  query FeaturedNewsQuery {
    featured: file(absolutePath:{ regex: "/ex-1.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 670, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default FeaturedNews
