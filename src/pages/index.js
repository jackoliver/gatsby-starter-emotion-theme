/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Link } from "gatsby"

import { Default as Layout } from "layouts"
import { Image, SEO, Wrapper, Tag, TagContainer } from "components"
import { Hero } from "modules"

const DependencyTagLink = ({ children, link }) => (
  <Tag>
    <pre>
      <a target="_blank" rel="nofollow noreferrer" href={link}>
        {children}
      </a>
    </pre>
  </Tag>
)

const IndexPage = () => {
  const theme = useTheme()
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        background={theme.COLOR.DARK.hex}
        color={theme.COLOR.LIGHT.hex}
        padding={[theme.PADDING[500], 0]}
      >
        <h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jackoliver"
          >
            @jackoliver
          </a>{" "}
          /{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jackoliver/gatsby-emotion-starter-theme"
          >
            gatsby-emotion-starter-theme
          </a>
        </h5>
        <TagContainer title="plugins">
          <DependencyTagLink link="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-emotion#readme">
            gatsby-plugin-emotion
          </DependencyTagLink>
          <DependencyTagLink link="https://github.com/luanbitar/gatsby-alias-imports#readme">
            gatsby-alias-imports
          </DependencyTagLink>
        </TagContainer>
        <TagContainer title="packages">
          <DependencyTagLink link="https://github.com/emotion-js/emotion/tree/master/packages/core">
            @emotion/core
          </DependencyTagLink>
          <DependencyTagLink link="https://github.com/emotion-js/emotion/tree/master/packages/styled">
            @emotion/styled
          </DependencyTagLink>
          <DependencyTagLink link="https://github.com/sayegh7/emotion-reset#readme">
            emotion-reset
          </DependencyTagLink>
          <DependencyTagLink link="https://github.com/emotion-js/emotion/tree/master/packages/emotion-theming">
            emotion-theming
          </DependencyTagLink>
        </TagContainer>
      </Hero>
      <Wrapper padding={[theme.PADDING[600], 0]}>
        <h3>Welcome to your new gatsby site.</h3>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
