import CallsToAction from '../components/calls-to-action'
import Layout from '../components/layout'
import Lede from '../components/lede'
import Navigation from '../components/navigation'
import Section from '../components/section'
import { graphql } from 'gatsby'
import React from 'react'

interface SkillsProps {
  data: MarkdownQueryResult
}

const Skills = ({ data }: SkillsProps) => {
  const ledeContent =
    'I am a full stack software engineer and an aspiring designer. Here’s what I do.'

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
