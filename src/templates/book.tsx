import React from 'react'
import { graphql, Link } from 'gatsby'

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout' was resolved to '/ho... Remove this comment to see the full error message
import Layout from '../components/layout'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/stars' was resolved to '/hom... Remove this comment to see the full error message
import Stars from '../components/stars'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout/header' was resolved ... Remove this comment to see the full error message
import Header from '../components/layout/header'

const Book = ({
  data,
  pageContext
}: any) => {
  const bookData = data.airtable.data

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout title="Books">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <h2 style={{ paddingTop: '1rem', fontStyle: 'italic' }}>
        {bookData.Title}
      </h2>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>
        Book by {bookData.Author} &bull; Reviewed {bookData.Date_Finished}{' '}
      </p>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>{bookData.Review}</p>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Stars count={bookData.Rating} />
      </p>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        ← <Link to="/books">Back to all books</Link>
      </span>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    airtable(data: { Slug: { eq: $slug } }) {
      id
      data {
        Author
        Date_Finished(formatString: "MMM YYYY")
        Rating
        Title
        Review
      }
    }
  }
`
export default Book
