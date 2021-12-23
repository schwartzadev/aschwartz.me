import '../../../scss/global.scss'
import Container from './container'
import Footer from './footer'
import SEO from './seo'
import 'normalize.css'
import PropTypes from 'prop-types'
import React from 'react'

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
