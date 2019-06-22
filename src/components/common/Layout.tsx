import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'

import Navigation from '@components/common/Navigation'
import Footer from '@components/common/Footer'

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
	display: flex;
	flex-direction: column;
  min-height: 100vh;
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
  flex: 1;
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
  background: ${props => props.theme.colors.primary};;
  color: white;
  margin-top: ${props => props.theme.rhythm(1)};

  /* Mobile Styles */
  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`

class Layout extends React.Component<ILayout, {}> {
  render() {
    const { children } = this.props

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
            <Footer />
          </FooterContainer>
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default Layout
