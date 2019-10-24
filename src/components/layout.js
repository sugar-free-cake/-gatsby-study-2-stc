import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Location } from "@reach/router"
import theme from "../styles/theme"
import Header from "./header"
import Banner from "./banner"
import Footer from "./footer"
import MobileMenu from "./mobilemenu"
import GlobalStyle from "../styles/globalStyle"
import styled from "styled-components"
import media from "../styles/media"

const Main = styled.main`
  max-width: 1230px;
  margin: 0 auto;
  padding: 96px 0;

  ${media.desktop`
    padding: 96px 20px;
    overflow-x: hidden;
  `}
`

const Body = styled.div`
  transition: transform 0.3s ease-in-out;
  transform: ${props =>
    props.mobileMenuOpen ? "translateX(-60%)" : "translateX(0)"};
`

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    /* 모바일 메뉴 활성시 스크롤 제거  */
    mobileMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible")
  }, [mobileMenuOpen])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Body mobileMenuOpen={mobileMenuOpen}>
        <Location>
          {({ location }) => (
            <>
              <Header
                pathname={location.pathname}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <Banner pathname={location.pathname} />
            </>
          )}
        </Location>
        <Main media={media}>{children}</Main>
        <Footer />
      </Body>
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
    </ThemeProvider>
  )
}

export default Layout
