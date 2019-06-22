import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.footer`
  ${props => ({
    ...props.theme.scale(-2 / 5)
  })}

  max-width: ${props => props.theme.rhythm(26)};
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${props => props.theme.rhythm(3 / 4)};
  color: ${props => props.theme.colors.gray500};

  .menu {
    ul {
      line-height: ${props => props.theme.rhythm(1.5)};
      display: flex;
      margin-left: 0;
      margin-bottom: 0;
      list-style: none;
    }

    li {
      padding-right: 15px;
      margin-bottom: 0;
    }
  }

  .all-rights-reserved {
    line-height: ${props => props.theme.rhythm(1)};
    padding-bottom: ${props => props.theme.rhythm(0.5)};
  }
`

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <StyledContainer>
        <div className="menu">
          <ul>
            <li>Về chúng tôi</li>
            <li>Điều khoản</li>
            <li>Liên hệ (Ads)</li>
          </ul>
        </div>
        <div className="all-rights-reserved">
          © {new Date().getFullYear()} All rights reserved
        </div>
      </StyledContainer>
    )
  }
}

export default Footer
