import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'

import Navigation from '@components/common/Navigation';

import { rhythm, scale } from "@utils/typography"
import { colors } from '@constants/index'

interface ILayout {
  location: ILocation
  title: string
  children: any
}

const theme = {
  rhythm,
  scale,
  colors,
}

const AppContainer = styled.div`
  background: ${props => props.theme.colors.mainBackground};

  a {
    color: ${props => props.theme.colors.black500};
  }
`

const HeaderContainer = styled.div`
  background: ${props => props.theme.colors.black500};
  height: ${props => props.theme.rhythm(1.5)};
`

const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.rhythm(26)};
  padding: 0 ${props => props.theme.rhythm(3 / 4)};
  margin-top: ${props => props.theme.rhythm(2)};

  /* Mobile Styles */
  @media only screen and (max-width: 600px) {
    padding: 0 0;
    margin-top: 0;
  }
`

const FooterContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.rhythm(26)};
  padding: 0 ${props => props.theme.rhythm(3 / 4)};
`

class Layout extends React.Component<ILayout, {}> {
  render() {
    const { location, title, children } = this.props
    // @ts-ignore
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <HeaderContainer>
            <Navigation />
          </HeaderContainer>
          <MainContainer>
            <main>{children}</main>
          </MainContainer>
          <FooterContainer>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </FooterContainer>
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default Layout
