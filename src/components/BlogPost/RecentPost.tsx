import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

interface IProps {
  title: string
  slug: string
  key: string
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
  width: 33.33%;
  padding: 0 ${props => props.theme.rhythm(0.25)};

  .title {
    ${props => ({
      ...props.theme.scale(-0.3)
    })}
    line-height: ${props => props.theme.rhythm(0.8)};
    font-weight: bold;
  }

  .thumb {
    margin-bottom: ${props => props.theme.rhythm(0.25)};
    border: 1px solid ${props => props.theme.colors.borderThumbnail};
  }

  /* Mobile Styles */
  @media only screen and (max-width: 600px) {
    width: 50%;
  }
`

class RecentPost extends React.Component<IProps, {}> {
  render() {
    const { slug, title, heroImage } = this.props

    return (
      <StyledContainer>
        <Link to={`/${slug}`}>
          <article className="article-container">
            <div className="thumb">
              <Image sizes={heroImage.sizes} alt="" />
            </div>
            <p className="title">{title}</p>
          </article>
        </Link>
      </StyledContainer>
    )
  }
}

export default RecentPost
