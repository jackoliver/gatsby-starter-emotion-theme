/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import PropTypes from "prop-types"
import { Wrapper } from "components"

const Hero = ({ children, background, color, padding }) => {
  const theme = useTheme()
  const styles = css`
    background: ${background || theme.COLOR.LIGHT.hex};
    color: ${color || theme.COLOR.DARK.hex};
  `
  return (
    <div css={styles}>
      <Wrapper padding={padding}>{children}</Wrapper>
    </div>
  )
}

Hero.propTypes = {
  children: PropTypes.object.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.array,
}

export { Hero }
