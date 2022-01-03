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

  const { createPage } = actions

  books
    .filter(book => book.data.Slug && book.data.Review)
    .forEach(book => {
      createPage({
        path: `/books/${book.data.Slug}`,
        component: require.resolve(`./src/templates/book.tsx`),
        context: { slug: book.data.Slug },
      })
    })

  const blogPosts = await graphql(
    `
      query ($databaseId: String!) {
        notionDatabase(
          ref: { eq: $databaseId }
          childrenNotionPage: {
            elemMatch: {
              childMarkdownRemark: {
                frontmatter: {
                  Status: { eq: "Published" }
                  Published_Date: { start: {} }
                }
              }
            }
          }
        ) {
          childrenNotionPage {
            id
            childMarkdownRemark {
              frontmatter {
                slugDate: Published_Date {
                  start(formatString: "MMMM-YYYY")
                }
                status: Status
                title: Title
              }
            }
          }
        }
      }
    `,
    {
      databaseId: process.env.GATSBY_WRITING_DATABASE_ID,
    }
  )

  blogPosts.data.notionDatabase.childrenNotionPage.forEach(page => {
    const { frontmatter } = page.childMarkdownRemark

    const { slugDate, status, title } = frontmatter
    const slugify = text => {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
    }

    if (status === 'Published') {
      createPage({
        path: `/writing/${slugify(`${title}-${slugDate.start}`)}`,
        component: require.resolve(`./src/templates/post.tsx`),
        context: {
          notionPageId: page.id,
        },
      })
    }
  })
}
