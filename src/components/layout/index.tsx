import React from 'react'
import PropTypes from 'prop-types'

// @ts-expect-error ts-migrate(6142) FIXME: Module './footer' was resolved to '/home/andrew/as... Remove this comment to see the full error message
import Footer from './footer'
// @ts-expect-error ts-migrate(6142) FIXME: Module './container' was resolved to '/home/andrew... Remove this comment to see the full error message
import Container from './container'
// @ts-expect-error ts-migrate(6142) FIXME: Module './seo' was resolved to '/home/andrew/aschw... Remove this comment to see the full error message
import SEO from './seo'

import '../../../scss/global.scss'
import 'normalize.css'

const Layout = ({ title, children }: any) => {
  return (
    <>
      <SEO title={title} />

      <Container>
        <main>{children}</main>
      </Container>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
