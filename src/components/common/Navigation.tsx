import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { routeConstants } from '@constants/index'
import logo from '@static/genk-logo.png'

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.rhythm(26)};
  padding: 0 ${props => props.theme.rhythm(3 / 4)};
  display: flex;

  a {
    text-decoration: none;
    background-image: none;
    text-shadow: none;
  }

  img {
    margin-bottom: 0;
    min-width: 140px;
  }

  .logo {
    display: flex;
    align-items: center;
    height: ${props => props.theme.rhythm(1.5)};
  }

  .menu-list {
    color: white;
    list-style: none;
    display: flex;
    margin-bottom: 0;
  }

  .menu-item {
    margin-left: ${props => props.theme.rhythm(1)};
    margin-bottom: 0;
    text-transform: uppercase;

    a {
      display: flex;
      align-items: center;
      color: white;
      height: ${props => props.theme.rhythm(1.5)};

      &:hover {
        color: ${props => props.theme.colors.secondary};
      }

      &.active {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }

  /* Mobile Styles */
  @media only screen and (max-width: 600px) {
    .menu-list {
      ${props => ({
        ...props.theme.scale(-2/5)
      })}
    }

    .menu-item {
      margin-left: ${props => props.theme.rhythm(2 / 3)};
    }
  }
`

class Navigation extends React.Component<{}, {}> {
  render() {
    return (
      <StyledContainer>
        <Link to={routeConstants.home.path} className="logo">
          <img src={logo} alt="Logo" width="140" height="20" />
        </Link>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to={routeConstants.home.path} activeClassName="active">
              Mới nhất
            </Link>
          </li>
          <li className="menu-item">
            <Link to={routeConstants.knowledge.path} activeClassName="active">
              Kiến thức
            </Link>
          </li>
        </ul>
      </StyledContainer>
    )
  }
}

export default Navigation
