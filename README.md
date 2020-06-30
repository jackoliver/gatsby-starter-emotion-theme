
# gatsby-starter-emotion-theme

An extension of the `gatsby-starter-default` repository, made to get up and running quicker with standard marketing microsites.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jackoliver/gatsby-starter-emotion-theme)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/jackoliver/gatsby-starter-emotion-theme)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the emotion starter.

    ```shell
    # create a new Gatsby site using this starter
    gatsby new my-default-starter https://github.com/jackoliver/gatsby-starter-emotion-theme
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## Plugins used

- gatsby-plugin-emotion
- gatsby-alias-imports

## Packages used

- @emotion/core
- @emotion/styled
- emotion-reset
- emotion-theming

## 📂 Folder structure

By using `gatsby-alias-imports`, we can define alias paths to the modules and components we require, making it easier to import and re-use code across multiple pages and layouts.

For example, this:

```js
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
```

turns into:

```js
import { Default as Layout } from 'layouts'
import { Image, SEO } from 'components'
```

### Benefits

1. Multiple layouts can be created very easily on a per-page level.
2. Components can be imported in one line.
3. Modules can also be imported in one line.

The full folder structure looks like this:

    .
    ├── node_modules
    ├── src
    │   ├── components
    │   ├── config
    │   ├── images
    │   ├── layouts
    │   ├── modules
    │   └── pages
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to the documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

