/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Fragment } from "react"
import { useTheme } from "emotion-theming"
const TagContainer = ({ children, title }) => {
  const theme = useTheme()
  const styles = {
    base: css`
      display: flex;
      flex-wrap: wrap;
      margin: ${theme.MARGIN[200]} 0 ${theme.MARGIN[100]};

      > * {
        margin-bottom: ${theme.MARGIN[100]};
      }

      > *:not(:last-of-type) {
        margin-right: ${theme.MARGIN[100]};
      }
    `,
    title: css`
      margin-top: ${theme.MARGIN[300]};
      padding-bottom: ${theme.PADDING[100]};
      border-bottom: 1px solid;
    `,
  }

  return (
    <Fragment>
      {title && <h5 css={styles.title}>{title}</h5>}
      <div css={styles.base}>{children}</div>
    </Fragment>
  )
}
export { TagContainer }
