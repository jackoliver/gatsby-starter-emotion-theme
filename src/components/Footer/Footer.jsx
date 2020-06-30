/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import { Wrapper } from "components"

const Footer = () => {
  const theme = useTheme()
  const styles = css`
    background: ${theme.COLOR.FEATURE[0].hex};
    color: ${theme.COLOR.LIGHT.hex};
  `
  return (
    <footer css={styles}>
      <Wrapper padding={[theme.PADDING[300]]}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Wrapper>
    </footer>
  )
}
export { Footer }
