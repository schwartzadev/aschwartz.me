import React from 'react'
import { graphql } from 'gatsby'

import ListPage from '../components/list-page'

export default ({ data }) => {
  const research = data.allContentYaml.nodes.find(
    list => list.research !== null
  ).research

  const ledeContent = <>See my past and current research projects.</>

  const ctas = [
    { name: 'Read my latest updates', href: '/' },
    { name: 'See my projects', href: '/projects' },
  ]

  return (
    <ListPage
      listItems={research}
      title="Research"
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
        research {
          description
          title
          slug
        }
      }
    }
  }
`
