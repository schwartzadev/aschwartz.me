import { hero as heroStyle } from './hero.module.scss'
import { Link } from 'gatsby'
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
      <Link to="/writing/one-small-step-december-2021">
        My first piece, for December 2021
      </Link>
      , is available now.
    </h2>
  </div>
)

export default Hero
