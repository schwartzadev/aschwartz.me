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
      I'm writing something new each month, check out{' '}
      <Link to="/writing/insider-and-web-3-february-2022">the latest here</Link>
      .
    </h2>
    <h3>
      Or view my posts from{' '}
      <Link to="/writing/insider-and-web-3-february-2022">February</Link>,{' '}
      <Link to="/writing/round-two-january-2022">January</Link>, or{' '}
      <Link to="/writing/one-small-step-december-2021">December</Link>.
    </h3>
  </div>
)

export default Hero
