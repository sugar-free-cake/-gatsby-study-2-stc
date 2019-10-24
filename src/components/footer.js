import React from "react"
import styled, { keyframes } from "styled-components"
import { Waypoint } from "react-waypoint"

const textAnim = keyframes`
  0% {
    transform : translateY(20px);
    opacity: 0;
  }
  100% {
    transform : translateY(0);
    opacity: 100%;
  }

`

const Container = styled.footer`
  div:first-child {
    padding: 32px;
    background-color: #26324a;

    p {
      text-align: center;
      margin: 0 auto;
      font-family: adelle-sans;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.2px;
      line-height: 1.6em;
      font-style: italic;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  div:last-child {
    padding: 64px 32px;
    background-color: #0a1733;
    p {
      margin: 0 auto;
      max-width: 720px;
      text-align: center;
      font-family: proxima-nova;
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .add-anim {
    animation: ${textAnim} 0.5s ease-in forwards;
  }
`

const addTextAnim = () => {
  document.querySelector(".copyright").classList.add("add-anim")
}

const removeTextAnim = () => {
  document.querySelector(".copyright").classList.remove("add-anim")
}

const Footer = () => (
  <Container>
    <div>
      <Waypoint onEnter={() => addTextAnim()} onLeave={() => removeTextAnim()}>
        <p className="copyright">
          © Copyright 2019 Swedish Trading Company Limited
        </p>
      </Waypoint>
    </div>
    <div>
      <p>
        SWEDISH TRADING COMPANY LIMITED, 165 HOI BUN ROAD, KWUN TONG, KOWLOON,
        HONG KONG+852 2953 5111STC@SWEDISHTRADING.COM
      </p>
    </div>
  </Container>
)
export default Footer
