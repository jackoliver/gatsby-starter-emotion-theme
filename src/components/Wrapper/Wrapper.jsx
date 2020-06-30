/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
const Wrapper = ({ children, padding }) => {
  const theme = useTheme()
  const styles = css`
    max-width: ${theme.WRAPPER_WIDTH};
    margin: 0 auto;
    padding: ${padding
      ? `${padding[0] || 0} ${padding[1] || theme.PADDING[300]}`
      : 0};
  `
  return (
    <div className="W" css={styles}>
      {children}
    </div>
  )
}
export { Wrapper }
