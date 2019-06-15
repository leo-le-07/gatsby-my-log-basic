import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from "gatsby-image"

import featured1 from '@static/examples/ex-1.jpg';

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
      margin-top: 0;
      margin-bottom: ${props => props.theme.rhythm(1 / 2)};
      color: white;
    }

    .info {
      ${props => ({
        ...props.theme.scale(-2 / 5)
      })}
      color: ${props => props.theme.colors.gray500};
      margin-bottom: ${props => props.theme.rhythm(0.3)};
    }
  }
`

class FeaturedNews extends React.Component<{}, {}> {
  render() {
    return (
      <StaticQuery
        query={featuredNewsQuery}
        render={(data) => {
          const { featured } = data
          return (
            <StyledContainer>
              <Link to="hi-folks">
                <div className="thumb">
                  <Image
                    fluid={featured.childImageSharp.fluid}
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
        }}
      />
    )
  }
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
