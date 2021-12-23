import React from 'react'
import { graphql } from 'gatsby'

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/calls-to-action' was resolve... Remove this comment to see the full error message
import CallsToAction from '../components/calls-to-action'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout' was resolved to '/ho... Remove this comment to see the full error message
import Layout from '../components/layout'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/lede' was resolved to '/home... Remove this comment to see the full error message
import Lede from '../components/lede'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/navigation' was resolved to ... Remove this comment to see the full error message
import Navigation from '../components/navigation'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/section' was resolved to '/h... Remove this comment to see the full error message
import Section from '../components/section'

const Skills = ({ data }: any) => {
  const ledeContent = (
    <>
      I am a full stack software engineer and an aspiring designer. Here’s what
      I do.
    </>
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
export default Skills
