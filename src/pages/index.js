import React from 'react'
import { graphql } from 'gatsby'

import CallsToAction from '../components/calls-to-action'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Section from '../components/section'

const Index = ({ data }) => {
  return (
    <Layout title="Home">
      <Navigation />
      <Hero />
      <Section htmlContent={data.markdownRemark.html} title="Highlights" />
      <CallsToAction
        ctas={[
          { name: 'Explore my projects', href: '/projects' },
          { name: 'Learn about my research', href: '/research' },
        ]}
        title="Learn more about me"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "latest-news" } }) {
      html
    }
  }
`

export default Index
