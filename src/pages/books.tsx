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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout title="Books">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Lede>What I've been reading</Lede>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Table>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <tbody>
          {books.map((book: any) => {
            const bookData = book.data
            return (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <tr key={bookData.Slug}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <td>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <em>
                    {bookData.Slug && bookData.Review ? (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Link to={`/books/${bookData.Slug}`}>
                        {bookData.Title}
                      </Link>
                    ) : (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <>{bookData.Title}</>
                    )}
                  </em>{' '}
                  by {bookData.Author}
                </td>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <td>{bookData.Date_Finished}</td>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <td>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Stars count={bookData.Rating} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <em>(since November 2021)</em>
      </p>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
