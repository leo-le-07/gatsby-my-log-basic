import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
      <StyledContainer>
        <Link to="hi-folks">
          <div className="thumb">
            <img src={featured1} alt="Featured 1" />
          </div>
          <article className="content">
            <h3>Shazam trên android có thể nhận diện được bài hát qua tai nghe</h3>
            <div className="info">18 phút trước</div>
          </article>
        </Link>
      </StyledContainer>
    )
  }
}

export default FeaturedNews
