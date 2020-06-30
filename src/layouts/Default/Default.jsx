/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header, Footer } from "components"

const Default = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = useTheme()
  const styles = css``

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main css={styles}>{children}</main>
      <Footer />
    </Fragment>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Default }
