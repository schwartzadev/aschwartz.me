import { hero as heroStyle } from './hero.module.scss'
import React from 'react'

const Hero = () => (
  <div className={heroStyle}>
    <h1>
      <span role="img" aria-label="wave">
        👋
      </span>{' '}
      I’m Andrew
    </h1>
    <h3>Full-stack software engineer</h3>
    <h3>
      <a href="mailto:andrew@aschwartz.me">andrew@aschwartz.me</a> /{' '}
      <a href="https://github.com/schwartzadev/">schwartzadev</a>
    </h3>

    <h2>
      I'm writing something new each month!{' '}
      <a href="https://smoggy-swamp-cc4.notion.site/December-2021-One-Small-Step-cf3fd181146345fb81228213632a4439">
        My first piece, for December 2021
      </a>
      , is available now.
    </h2>
  </div>
)

export default Hero
