import React from 'react'
import { graphql } from 'gatsby'

import ListPage from '../components/list-page'

export default ({ data }) => {
  const projects = data.allContentYaml.nodes[0].projects

  const ledeContent = <>Explore what I’ve been working on.</>

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
    <ListPage
      listItems={projects}
      title="Projects"
      ledeContent={ledeContent}
      ctaTitle="Learn more about me"
      callsToAction={ctas}
    />
  )
}

export const query = graphql`
  query {
    allContentYaml {
      nodes {
        projects {
          description
          title
          slug
        }
      }
    }
  }
`
