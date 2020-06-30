/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Link } from "gatsby"

import { Default as Layout } from "layouts"
import { SEO, Wrapper } from "components"

const SecondPage = () => {
  const theme = useTheme()
  return (
    <Layout>
      <Wrapper padding={[theme.PADDING[600], 0]}>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Wrapper>
    </Layout>
  )
}

export default SecondPage
