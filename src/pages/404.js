/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Link } from "gatsby"

import { Default as Layout } from "layouts"
import { SEO, Wrapper } from "components"

const NotFoundPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <Wrapper padding={[theme.PADDING[600], 0]}>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <br />
        <Link to="/">Back to homepage &rarr;</Link>
      </Wrapper>
    </Layout>
  )
}
export default NotFoundPage
