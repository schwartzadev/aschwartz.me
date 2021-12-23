import React from 'react'
import PropTypes from 'prop-types'

import Footer from './footer'
import Container from './container'
import SEO from './seo'

import '../../../scss/global.scss'
import 'normalize.css'

const Layout = ({ title, children }) => {
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
