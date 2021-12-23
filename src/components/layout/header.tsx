import React from 'react'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../navigation' was resolved to '/home/andr... Remove this comment to see the full error message
import Navigation from '../navigation'

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
