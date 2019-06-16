import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const StyledContainer = styled.div`
  .article-container {
    background-color: white;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  .title {
    margin-top: 0;
  }

  .info {
    color: ${props => props.theme.colors.gray500};
  }

  @media only screen and (min-width: 601px) {
    .article-container {
      position: relative;
      padding: 24px;
      padding-left: calc(24px + 252px + 24px);
      min-height: calc(24px + 218px + 24px);
    }

    .title {
      ${props => ({
        ...props.theme.scale(0.2)
      })}
    }

    .thumb {
      position: absolute;
      top: 24px;
      left: 24px;
      width: 252px;
    }

    .excerpt, .info {
      ${props => ({
        ...props.theme.scale(- 0.4)
      })}
    }

    .excerpt {
      height: ${props => props.theme.rhythm(2.2)};
    }
  }

  /* Mobile Styles */
  @media only screen and (max-width: 600px) {
    .article-container {
      padding: ${props => props.theme.rhythm(0.5)}
    }

    .title {
      ${props => ({
        ...props.theme.scale(0.2)
      })}
      margin-bottom: ${props => props.theme.rhythm(0.1)};
    }

    .thumb {
      float: left;
      margin-top: 7px;
      margin-right: ${props => props.theme.rhythm(0.5)};
      width: 160px;
    }

    .excerpt, .info {
      ${props => ({
        ...props.theme.scale(-0.3)
      })}
    }

    .excerpt {
      margin-bottom: ${props => props.theme.rhythm(0.1)};
      height: ${props => props.theme.rhythm(4.1)};
      overflow: hidden;
    }

    .info {
      height: ${props => props.theme.rhythm(1)};
    }
  }
`

const ThumbnailPost = () => {
  const data = useStaticQuery(thumbnailQuery)

  return (
    <StyledContainer>
      <Link to="hi-folks">
        <article className="article-container">
          <h3 className="title">Một số người cảm thấy thoải mái hơn khi đeo AirPods làm chuyện ấy</h3>
          <div className="thumb">
            <Image
              fluid={data.featured.childImageSharp.fluid}
              alt="Featured 1"
            />
          </div>
          <p className="excerpt">Một thăm dò mới đây về thói quen nghe nhạc và tình dục đã cho thấy nhiều người có cảm giác mọi thứ diễn ra tốt đẹp hơn khi có âm nhạc xúc tác lúc hành lạc.</p>
          <div className="info">1 giờ trước</div>
        </article>
      </Link>
    </StyledContainer>
  )
}

const thumbnailQuery = graphql`
  query ThumbnailQuery {
    featured: file(absolutePath:{ regex: "/ex-3.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 252, maxHeight: 218) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ThumbnailPost
