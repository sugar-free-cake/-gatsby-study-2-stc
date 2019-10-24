import { css } from "styled-components"
import thmeme from "./theme"

const sizes = {
  desktop: thmeme.breakpoints.desktop.max,
  tablet: thmeme.breakpoints.tablet.max,
  phone: thmeme.breakpoints.phone.max,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media
