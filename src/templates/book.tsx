import Layout from '../components/layout'
import Header from '../components/layout/header'
import Stars from '../components/stars'
import { graphql, Link } from 'gatsby'
import React from 'react'

interface BookProps {
  data: {
    airtable: Book
  }
}

const Book = ({ data }: BookProps) => {
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
