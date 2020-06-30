/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Wrapper } from "components"

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  const styles = css`
    background: ${theme.COLOR.FEATURE[1].hex};
    color: ${theme.COLOR.LIGHT.hex};

    .W {
      display: flex;
      justify-content: space-between;
    }
  `
  return (
    <header css={styles}>
      <Wrapper padding={[theme.PADDING[300]]}>
        <Link to="/">{siteTitle}</Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jackoliver/gatsby-emotion-starter-theme"
        >
          GitHub
        </a>
      </Wrapper>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
