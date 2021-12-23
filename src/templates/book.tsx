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

    <Layout title="Books">

      <Header />

      <h2 style={{ paddingTop: '1rem', fontStyle: 'italic' }}>
        {bookData.Title}
      </h2>

      <p>
        Book by {bookData.Author} &bull; Reviewed {bookData.Date_Finished}{' '}
      </p>

      <p>{bookData.Review}</p>

      <p>

        <Stars count={bookData.Rating} />
      </p>

      <span>

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
