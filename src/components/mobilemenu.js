import React from "react"
import styled from "styled-components"

const Container = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  height: 100%;
  right: 0;
  background: #192848;
  transition: width 0.3s ease-in-out;
  width: ${props => (props.mobileMenuOpen ? "60%" : "0%")};
  overflow: hidden;
  p {
    color: #fff;
    margin: 20px;
  }
`
const MobileMenu = ({ mobileMenuOpen }) => {
  return (
    <Container mobileMenuOpen={mobileMenuOpen}>
      <p>메뉴</p>
    </Container>
  )
}

export default MobileMenu
