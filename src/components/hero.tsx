import React from 'react'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './hero.module.scss' or its cor... Remove this comment to see the full error message
import { hero } from './hero.module.scss'

export default () => (

  <div className={hero}>

    <h1>

      <span role="img" aria-label="wave">
        👋
      </span>{' '}
      I’m Andrew
    </h1>

    <h2>Full-stack software engineer</h2>

    <h3>

      <b>Let’s get in touch:</b>{' '}

      <a href="mailto:andrew@aschwartz.me">andrew@aschwartz.me</a> or{' '}

      <a href="https://github.com/schwartzadev/">schwartzadev</a> on GitHub.
    </h3>
  </div>
)
