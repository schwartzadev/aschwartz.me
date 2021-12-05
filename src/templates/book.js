import React from 'react'
import { graphql, Link } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout'
import Stars from '../components/stars'
import Header from '../components/layout/header'

export default ({ data, pageContext }) => {
  // FIXME: don't use allContentYaml
  const book = data.allContentYaml.nodes[0].books.find(
    book => book.slug === pageContext.slug
  )

  return (
    <Layout title="Books">
      <Header />
      <h2 style={{ paddingTop: '1rem', fontStyle: 'italic' }}>{book.title}</h2>
      <p>
        Book by {book.author} &bull; Reviewed{' '}
        {moment(book.finished, 'MM-DD-YYYY').format('MMM YYYY')}{' '}
      </p>
      <p>{book.review}</p>
      <p>
        <Stars count={book.stars} />
      </p>
      <span>
        ← <Link to="/books">Back to all books</Link>
      </span>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allContentYaml(filter: { books: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        books {
          author
          review
          finished
          slug
          stars
          title
        }
      }
    }
  }
`
