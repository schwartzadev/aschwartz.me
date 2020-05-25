import React from 'react'
import { graphql } from 'gatsby'

import CallsToAction from '../components/calls-to-action'
import Layout from '../components/layout'
import Lede from '../components/lede'
import Navigation from '../components/navigation'
import Section from '../components/section'

export default ({ data }) => {
  const ledeContent = (
    <>I am a capable programmer and an aspiring designer. Here’s what I do.</>
  )
  return (
    <Layout title="Skills">
      <Navigation />
      <Lede>{ledeContent}</Lede>
      <Section htmlContent={data.markdownRemark.html} title="My Skills" />
      <CallsToAction
        ctas={[
          { name: 'Explore my projects', href: '/projects' },
          {
            name: 'Browse my GitHub',
            href: 'https://github.com/schwartzadev/',
            external: true,
          },
        ]}
        title="Learn more about me"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "skills" } }) {
      html
    }
  }
`
