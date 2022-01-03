import Layout from '../components/layout'
import Header from '../components/layout/header'
import { graphql, Link } from 'gatsby'
import React from 'react'

interface PostProps {
  data: Post
}

const Post = ({ data }: PostProps) => {
  const { notionPage } = data

  const { childMarkdownRemark } = notionPage
  const { html, frontmatter } = childMarkdownRemark

  const {
    title,
    subtitle,
    publishedDate: { start: publishedDate },
  } = frontmatter

  return (
    <Layout title="Posts">
      <Header />
      <div
        style={{
          paddingTop: '1rem',
          paddingBottom: '1.5rem',
        }}
      >
        <p
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            marginBottom: 0,
            fontSize: '0.9rem',
          }}
        >
          {publishedDate}
        </p>
        <h1
          style={{
            marginBottom: '0.25rem',
            marginTop: '0.25rem',
            fontSize: '2.25rem',
          }}
        >
          {title}
        </h1>
        <h3 style={{ paddingTop: '0.25rem', marginTop: '0.25rem' }}>
          {subtitle}
        </h3>
      </div>

      <div dangerouslySetInnerHTML={{ __html: html }} />
      <span>
        {/* TODO: add a homepage for writing, make this link there */}←{' '}
        <Link to="/">Back to home</Link>
      </span>
    </Layout>
  )
}

export const query = graphql`
  query ($notionPageId: String!) {
    notionPage(id: { eq: $notionPageId }) {
      id
      childMarkdownRemark {
        html
        frontmatter {
          publishedDate: Published_Date {
            start(formatString: "MMMM YYYY")
          }
          status: Status
          title: Title
          subtitle: Subtitle
        }
      }
    }
  }
`
export default Post
