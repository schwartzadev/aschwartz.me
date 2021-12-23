import React from 'react'
import { graphql } from 'gatsby'

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/list-page' was resolved to '... Remove this comment to see the full error message
import ListPage from '../components/list-page'

const Research = ({
  data
}: any) => {
  const research = data.allContentYaml.nodes[0].research

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const ledeContent = <>See my past and current research projects.</>

  const ctas = [
    { name: 'Read my latest updates', href: '/' },
    { name: 'See my projects', href: '/projects' },
  ]

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
export default Research
