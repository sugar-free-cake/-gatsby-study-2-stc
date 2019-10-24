import React from "react"
import styled, { keyframes } from "styled-components"
import { useBannerData } from "../hooks"

const opacityAnim = keyframes`
0% {
    opacity: 0;
}
50% {
    opacity: 0;
}
100% {
    opacity: 0.4;
}
`
const textAnim = keyframes`
0% {
    opacity: 0;
    transform: translate(-50%, -20%);
}
75% {
    opacity: 0;
    transform: translate(-50%, -20%);
}
100% {
    opacity: 1;
    transform: translate(-50%, -50%);
}
`

const Container = styled.div`
  width: 100%;
  height: 455.8px;
  background-color: #1b1f31;
  position: relative;

  div {
    background: url(${props => props.imgPath}) no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 455.8px;
    opacity: 0;
    translate: opacity 2s;
    animation: ${opacityAnim} 1s ease-in forwards;
  }

  h1 {
    position: absolute;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 28px;
    letter-spacing: 1px;
    text-transform: none;
    line-height: 1em;
    color: #fff;
    animation: ${textAnim} 0.75s ease-in-out;
  }
`

const Banner = ({ pathname }) => {
  const [title, imgPath] = useBannerData(pathname)
  return imgPath ? (
    <Container imgPath={imgPath}>
      <h1>{title}</h1>
      <div></div>
    </Container>
  ) : null
}
export default Banner
