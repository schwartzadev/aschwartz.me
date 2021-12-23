exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allAirtable {
        nodes {
          id
          data {
            Author
            Slug
            Date_Finished(formatString: "MMM YYYY")
            Rating
            Title
            Review
          }
        }
      }
    }
  `)
  const books = data.allAirtable.nodes

  books
    .filter(book => book.data.Slug && book.data.Review)
    .forEach(book => {
      actions.createPage({
        path: `/books/${book.data.Slug}`,
        component: require.resolve(`./src/templates/book.js`),
        context: { slug: book.data.Slug },
      })
    })
}
