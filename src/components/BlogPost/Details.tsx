import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
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

class Details extends React.Component<{}, {}> {
  render() {
    const post = this.props

    return (
      <StyledContainer>
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
    )
  }
}

export default Details
