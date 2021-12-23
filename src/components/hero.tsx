import React from 'react'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './hero.module.scss' or its cor... Remove this comment to see the full error message
import { hero } from './hero.module.scss'

export default () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={hero}>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h1>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span role="img" aria-label="wave">
        👋
      </span>{' '}
      I’m Andrew
    </h1>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h2>Full-stack software engineer</h2>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h3>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <b>Let’s get in touch:</b>{' '}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <a href="mailto:andrew@aschwartz.me">andrew@aschwartz.me</a> or{' '}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <a href="https://github.com/schwartzadev/">schwartzadev</a> on GitHub.
    </h3>
  </div>
)
