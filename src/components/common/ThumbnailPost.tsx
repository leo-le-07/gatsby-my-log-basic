import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

interface IProps {
  title: string;
  slug: string;
  heroImage: {
    sizes: {
      aspectRatio: number,
      src: string,
      srcSet: string,
      sizes: string,
    }
  };
  description: string;
  publishDate: string;
}

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
      min-height: calc(24px + 169px + 24px);
    }

    .title {
      ${props => ({
        ...props.theme.scale(0.2)
      })}
      margin-bottom: ${props => props.theme.rhythm(0.5)};
    }

    .thumb {
      position: absolute;
      top: 30px;
      left: 24px;
      width: 252px;
    }

    .excerpt, .info {
      ${props => ({
        ...props.theme.scale(- 0.45)
      })}
    }

    .excerpt {
      height: ${props => props.theme.rhythm(2.8)};
      margin-bottom: ${props => props.theme.rhythm(0.5)};
      overflow: hidden;
      text-overflow: ellipsis;
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

const ThumbnailPost = (props: IProps) => {
  const {
    title,
    slug,
    heroImage,
    description,
    publishDate,
  } = props

  return (
    <StyledContainer>
      <Link to={`/${slug}`}>
        <article className="article-container">
          <h3 className="title">{title}</h3>
          <div className="thumb">
            <Image sizes={heroImage.sizes} alt="" />
          </div>
          <p className="excerpt">{description}</p>
          <div className="info">{publishDate}</div>
        </article>
      </Link>
    </StyledContainer>
  )
}

// const thumbnailQuery = graphql`
//   query ThumbnailQuery {
//     featured: file(absolutePath:{ regex: "/ex-3.jpg/" }) {
//       childImageSharp {
//         fluid(maxWidth: 252, maxHeight: 218) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export default ThumbnailPost
