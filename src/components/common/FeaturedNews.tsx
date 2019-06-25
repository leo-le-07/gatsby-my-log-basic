import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

interface IProps {
  slug: string
  title: string
  publishDate: string
  heroImage: {
    sizes: {
      aspectRatio: number,
      src: string,
      srcSet: string,
      sizes: string,
    }
  }
}

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
    width: 100%;

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

const FeaturedNews = (props: IProps) => {
  const {
    title,
    slug,
    heroImage,
    publishDate,
  } = props

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

export default FeaturedNews
