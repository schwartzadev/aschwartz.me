import React from 'react'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../navigation' was resolved to '/home/andr... Remove this comment to see the full error message
import Navigation from '../navigation'

export default ({ isHomepage = false }) => {
  if (isHomepage) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <header>homepage header</header>
  }
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <header>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Navigation />
    </header>
  )
}
