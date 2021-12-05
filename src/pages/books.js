import React from 'react'
import { graphql, Link } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout'
import Stars from '../components/stars'
import Table from '../components/table'
import Header from '../components/layout/header'
import Lede from '../components/lede'
import CallsToAction from '../components/calls-to-action'

export default ({ data }) => {
  const books = data.allContentYaml.nodes[0].books

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
          {books.map(book => (
            <tr key={book.slug}>
              <td>
                <em>
                  {book.slug && book.review ? (
                    <Link to={`books/${book.slug}`}>{book.title}</Link>
                  ) : (
                    <>{book.title}</>
                  )}
                </em>{' '}
                by {book.author}
              </td>
              <td>{moment(book.finished, 'MM-DD-YYYY').format('MMM YYYY')}</td>
              <td>
                <Stars count={book.stars} />
              </td>
            </tr>
          ))}
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
    allContentYaml {
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
