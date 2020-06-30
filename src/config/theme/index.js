import { css } from "@emotion/core"

// == Colors == //
// Example from Coolors: https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c

const RICH_BLACK = {
  hex: "#011627",
  rgb: `rgb(1, 22, 39)`,
  rgbArray: [1, 22, 39],
}

const BABY_POWDER = {
  hex: "#FDFFFC",
  rgb: `rgb(253, 255, 252)`,
  rgbArray: [253, 255, 252],
}

const TIFFANY_BLUE = {
  hex: "#2EC4B6",
  rgb: `rgb(46,196,182)`,
  rgbArray: [46, 196, 182],
}

const ROSE_MADDER = {
  hex: "#E71D36",
  rgb: `rgb(231,29,54)`,
  rgbArray: [231, 29, 54],
}

const ORANGE_PEEL = {
  hex: "#FF9F1C",
  rgb: `rgb(255,159,28)`,
  rgbArray: [255, 159, 28],
}

export const COLOR = {
  LIGHT: BABY_POWDER,
  DARK: RICH_BLACK,
  FEATURE: [TIFFANY_BLUE, ROSE_MADDER, ORANGE_PEEL],
}

// == Units of Measurement == //
const unit = 1
const units = {
  "100": `${unit * 0.5}rem`,
  "200": `${unit}rem`,
  "300": `${unit * 1.5}rem`,
  "400": `${unit * 2}rem`,
  "500": `${unit * 3}rem`,
  "600": `${unit * 4}rem`,
  "700": `${unit * 5}rem`,
  "800": `${unit * 6}rem`,
  "900": `${unit * 7.5}rem`,
}

export const PADDING = { ...units }
export const MARGIN = { ...units }

// == Typography == //
// Using 'Perfect 4th' scaling (1.333) – Read more at type-scale.com
export const BASE_FONT_SIZE = `${18}px`

export const H1 = css`
  font-size: 4.209em;
  font-weight: 500;
  margin-bottom: 0.4em;
`

export const H2 = css`
  font-size: 3.157em;
  font-weight: 500;
  margin-bottom: 0.4em;
`

export const H3 = css`
  font-size: 2.369em;
  font-weight: 600;
  margin-bottom: 0.4em;
`

export const H4 = css`
  font-size: 1.777em;
  font-weight: 500;
  margin-bottom: 0.4em;
`

export const H5 = css`
  font-size: 1.333em;
  font-weight: 500;
  margin-bottom: 0.4em;
`

export const H6 = css`
  font-size: 0.75em;
  margin-bottom: 0.4em;
`

export const P = css`
  font-size: 1em;
  line-height: 1.4;
  margin-bottom: 0.4em;
`

// == Broad Defaults == //
export const WRAPPER_WIDTH = `${1184}px`
