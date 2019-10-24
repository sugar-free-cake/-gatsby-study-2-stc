import { Link } from "gatsby"
import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import media from "../styles/media"

const submenuAnim = keyframes`
  0% {
    height: 0; 
    padding: 0px 20px;
  }
  100% {
    height: 194.4px;
    padding: 16px 20px;
  }

`

const Container = styled.header`
  width: 100%;
  position: absolute;
  z-index: 10;
  padding: 20px;
  ${props => props.pathname === "/contact" && "background-color: #192848;"}
`
const Logo = styled.div`
  float: left;
  max-width: 360px;
  img {
    width: 100%;
  }

  ${media.tablet`
  max-width: 260px;
  `}
`

const Submenu = styled.ul`
  text-align: left;
  overflow: hidden;
  padding: 16px 20px;
  /* display: inline-block; */
  display: ${props => (props.submenuOpen ? "inline-block" : "none")};
  position: absolute;
  top: 32px;
  left: 0;
  width: 260px;
  height: 194.4px;
  z-index: 1000;
  font-size: 13px;
  background-color: #192848;
  animation: ${submenuAnim} 0.3s ease-in forwards;

  li {
    list-style: none;
  }
  a,
  a:hover,
  a:active,
  a:visited {
    font-size: 13px;
    text-decoration: none;
    color: #fff;
    line-height: 1.8em;
  }
`

const Menu = styled.ul`
  float: right;
  margin: 0px;
  > li {
    float: left;
    list-style: none;
    position: relative;
  }
  > li > a {
    font-family: proxima-nova;
    font-weight: 500;
    font-style: normal;
    font-size: 13px;
    letter-spacing: 1.15px;
    text-transform: capitalize;
    text-decoration: none;
    line-height: 1em;
    color: rgba(255, 255, 255, 0.9);
    padding: 9.75px 13px;
    margin-left: 13px;
  }

  > li:last-child > a {
    border: 2px solid #fff;
    font-weight: 600;
    transition: background-color 0.1s 0s ease-in-out, color 0.1s 0s ease-in-out;

    &:last-child:hover,
    &:last-child:active {
      background-color: #fff;
      color: #000;
    }
  }

  ${media.tablet`
    display:none;
  `}
`

const MobileMenuBtn = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  display: none;
  ${media.tablet`
    display:block;
  `}
`

const Header = ({ pathname, mobileMenuOpen, setMobileMenuOpen }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)

  return (
    <Container pathname={pathname}>
      <Logo>
        <Link to="/">
          <img src="images/header/logo.png" alt="logo" />
        </Link>
      </Logo>
      <Menu>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
        <li
          onMouseOver={() => setSubmenuOpen(true)}
          onMouseLeave={() => setSubmenuOpen(false)}
        >
          <Link to="/overview">Our Business</Link>
          <Submenu submenuOpen={submenuOpen}>
            <li>
              <Link to="/overview">Overview</Link>
            </li>
            <li>
              <Link to="/medical-systems-solutions">
                Medical Systems &amp; Solutions
              </Link>
            </li>
            <li>
              <Link to="/pharmaceuticals">Pharmaceuticals</Link>
            </li>
            <li>
              <Link to="/laundry-solutions">
                Laundry &amp; Hygiene Solutions
              </Link>
            </li>
            <li>
              <Link to="/commercial-catering-solutions">
                Commercial Catering Solutions
              </Link>
            </li>
            <li>
              <Link to="/after-sales-service">After Sales Service</Link>
            </li>
            <li>
              <Link to="/project-engineering-and-consulting">
                Project Engineering &amp; Consulting
              </Link>
            </li>
          </Submenu>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
      </Menu>
      <MobileMenuBtn onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
    </Container>
  )
}

export default Header
