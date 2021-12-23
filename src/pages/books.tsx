import React from 'react'
import { graphql, Link } from 'gatsby'

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout' was resolved to '/ho... Remove this comment to see the full error message
import Layout from '../components/layout'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/stars' was resolved to '/hom... Remove this comment to see the full error message
import Stars from '../components/stars'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/table' was resolved to '/hom... Remove this comment to see the full error message
import Table from '../components/table'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout/header' was resolved ... Remove this comment to see the full error message
import Header from '../components/layout/header'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/lede' was resolved to '/home... Remove this comment to see the full error message
import Lede from '../components/lede'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/calls-to-action' was resolve... Remove this comment to see the full error message
import CallsToAction from '../components/calls-to-action'

export default ({
  data
}: any) => {
  const books = data.allAirtable.nodes

  const ctas = [
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
  );
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
