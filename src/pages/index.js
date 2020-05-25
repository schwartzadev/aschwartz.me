import React from 'react'

import CallsToAction from '../components/calls-to-action'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Lede from '../components/lede'
import Navigation from '../components/navigation'
import Section from '../components/section'

export default ({ data }) => {
  const ledeContent = (
    <>
      <b>Let's get in touch:</b>{' '}
      <a href="mailto:andrew@aschwartz.me">andrew@aschwartz.me</a> or at{' '}
      <a href="github.com/schwartzadev/">schwartzadev</a> on GitHub.
    </>
  )
  return (
    <Layout title="Home">
      <Hero />
      <Lede>{ledeContent}</Lede>
      <Navigation homepage />
      <Section htmlContent={data.markdownRemark.html} title="Latest News" />
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
