import CallsToAction from '../components/calls-to-action'
import Layout from '../components/layout'
import Header from '../components/layout/header'
import Lede from '../components/lede'
import Section from '../components/section'
import React from 'react'

export default ({
  listItems,
  title,
  ledeContent,
  ctaTitle,
  callsToAction,
}: any) => {
  return (
    <Layout title={title}>
      <Header />

      <Lede>{ledeContent}</Lede>

      <Section items={listItems} title={title} />

      <CallsToAction title={ctaTitle} ctas={callsToAction} />
    </Layout>
  )
}
