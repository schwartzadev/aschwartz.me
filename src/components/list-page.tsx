import React from 'react'

import Layout from '../components/layout'
import Header from '../components/layout/header'
import Section from '../components/section'
import Lede from '../components/lede'
import CallsToAction from '../components/calls-to-action'

export default ({ listItems, title, ledeContent, ctaTitle, callsToAction }) => {
  return (
    <Layout title={title}>
      <Header />
      <Lede>{ledeContent}</Lede>
      <Section items={listItems} title={title} />
      <CallsToAction title={ctaTitle} ctas={callsToAction} />
    </Layout>
  )
}
