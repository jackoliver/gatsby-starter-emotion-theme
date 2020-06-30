/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
const Tag = ({ children, background, color }) => {
  const theme = useTheme()
  const styles = css`
    background: ${background || theme.COLOR.LIGHT.hex};
    border-radius: 2px;
    color: ${color || theme.COLOR.FEATURE[1].hex};
    font-weight: 600;
    padding: ${theme.PADDING[100]} 1em;
  `
  return <div css={styles}>{children}</div>
}
export { Tag }
