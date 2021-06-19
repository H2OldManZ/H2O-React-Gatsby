
exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allContentfulPage {
                nodes {
                    slug
                    name
                }
            }
        }
    `)
    
    data.allContentfulPage.nodes.forEach(node => {
      const slug = node.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/page.js`),
        context: { slug: slug },
      })
    })
  }