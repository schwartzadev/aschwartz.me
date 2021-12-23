import Navigation from '../navigation'
import React from 'react'

export default ({ isHomepage = false }) => {
  if (isHomepage) {
    return <header>homepage header</header>
  }
  return (
    <header>
      <Navigation />
    </header>
  )
}
