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
      query {
        allNotion(
          filter: {
            properties: { Status: { value: { name: { eq: "Published" } } } }
          }
        ) {
          nodes {
            id
            childMarkdownRemark {
              frontmatter {
                slugDate: Published_Date {
                  start(formatString: "MMMM-YYYY")
                }
                status: Status {
                  id
                  name
                }
                title: Title
                slug: Slug
              }
            }
          }
        }
      }
    `
  )

  blogPosts.data.allNotion.nodes.forEach(page => {
    const { frontmatter } = page.childMarkdownRemark

    const { slugDate, status, title, slug } = frontmatter
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

    if (status.name === 'Published') {
      console.log('CREATING PAGE!!!!!')
      createPage({
        path: `/writing/${
          slug === '' ? slugify(`${title}-${slugDate.start}`) : slugify(slug)
        }`,
        component: require.resolve(`./src/templates/post.tsx`),
        context: {
          notionPageId: page.id,
        },
      })
    }
  })
}
