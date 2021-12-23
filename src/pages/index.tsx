import React from 'react'
import { graphql } from 'gatsby'

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/calls-to-action' was resolve... Remove this comment to see the full error message
import CallsToAction from '../components/calls-to-action'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/hero' was resolved to '/home... Remove this comment to see the full error message
import Hero from '../components/hero'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout' was resolved to '/ho... Remove this comment to see the full error message
import Layout from '../components/layout'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/navigation' was resolved to ... Remove this comment to see the full error message
import Navigation from '../components/navigation'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/section' was resolved to '/h... Remove this comment to see the full error message
import Section from '../components/section'

const Index = ({ data }: any) => {
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
