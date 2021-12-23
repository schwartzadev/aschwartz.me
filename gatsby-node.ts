// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'exports'.
exports.createPages = async function ({ actions, graphql }: any) {
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
    .filter((book: any) => book.data.Slug && book.data.Review)
    .forEach((book: any) => {
      actions.createPage({
        path: `/books/${book.data.Slug}`,
        // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
        component: require.resolve(`./src/templates/book.js`),
        context: { slug: book.data.Slug },
      })
    })
}
