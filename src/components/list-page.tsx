import React from 'react'

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout' was resolved to '/ho... Remove this comment to see the full error message
import Layout from '../components/layout'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/layout/header' was resolved ... Remove this comment to see the full error message
import Header from '../components/layout/header'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/section' was resolved to '/h... Remove this comment to see the full error message
import Section from '../components/section'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/lede' was resolved to '/home... Remove this comment to see the full error message
import Lede from '../components/lede'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/calls-to-action' was resolve... Remove this comment to see the full error message
import CallsToAction from '../components/calls-to-action'

export default ({
  listItems,
  title,
  ledeContent,
  ctaTitle,
  callsToAction
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout title={title}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Lede>{ledeContent}</Lede>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Section items={listItems} title={title} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CallsToAction title={ctaTitle} ctas={callsToAction} />
    </Layout>
  )
}
