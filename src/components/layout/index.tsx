import '../../../scss/global.scss'
import Container from './container'
import Footer from './footer'
import SEO from './seo'
import 'normalize.css'
import PropTypes from 'prop-types'
import React from 'react'

interface LayoutProps {
  title: string
  children: React.ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
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
