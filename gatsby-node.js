exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allContentYaml {
        nodes {
          books {
            author
            review
            finished
            slug
            stars
            title
          }
        }
      }
    }
  `)
  const books = data.allContentYaml.nodes[0].books

  books
    .filter(book => book.slug && book.review)
    .forEach(book => {
      actions.createPage({
        path: `books/${book.slug}`,
        component: require.resolve(`./src/templates/book.js`),
        context: { slug: book.slug },
      })
    })
}
