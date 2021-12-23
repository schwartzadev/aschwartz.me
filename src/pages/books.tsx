import CallsToAction from '../components/calls-to-action'
import Layout from '../components/layout'
import Header from '../components/layout/header'
import Lede from '../components/lede'
import Stars from '../components/stars'
import Table from '../components/table'
import { graphql, Link } from 'gatsby'
import React from 'react'

export default ({ data }: any) => {
  const books: Book[] = data.allAirtable.nodes

  const ctas: Cta[] = [
    {
      name: 'Browse my GitHub',
      href: 'https://github.com/schwartzadev/',
      external: true,
    },
    { name: 'Explore my skills', href: '/skills' },
    { name: 'Check out my research', href: '/research' },
  ]

  return (
    <Layout title="Books">
      <Header />
      <Lede>What I've been reading</Lede>
      <Table>
        <tbody>
          {books.map((book: any) => {
            const bookData = book.data
            return (
              <tr key={bookData.Slug}>
                <td>
                  <em>
                    {bookData.Slug && bookData.Review ? (
                      <Link to={`/books/${bookData.Slug}`}>
                        {bookData.Title}
                      </Link>
                    ) : (
                      <>{bookData.Title}</>
                    )}
                  </em>{' '}
                  by {bookData.Author}
                </td>
                <td>{bookData.Date_Finished}</td>
                <td>
                  <Stars count={bookData.Rating} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <p>
        <em>(since November 2021)</em>
      </p>
      <CallsToAction title="Learn more about me." ctas={ctas} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(sort: { fields: data___Date_Finished, order: DESC }) {
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
`
