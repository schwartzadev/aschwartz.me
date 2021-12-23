import React from 'react'
import { container, contactList, comments } from './footer.module.scss'

export default () => (
  <footer className={container}>
    <h2>Contact me</h2>
    <ul className={contactList}>
      <li>
        <a href="https://www.linkedin.com/in/andrewtschwartz/">LinkedIn</a>
      </li>
      <li>
        <a href="mailto:andrew@aschwartz.me">Email</a>
      </li>
      <li>
        <a href="https://github.com/schwartzadev/">GitHub</a>
      </li>
    </ul>
    <div className={comments}>
      <p>
        Source & hosting on{' '}
        <a href="https://github.com/schwartzadev/aschwartz.me">GitHub</a>
      </p>
      <p>
        Made with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>{' '}
        and <a href="https://www.gatsbyjs.org/">GatsbyJS</a> in Colorado, USA
      </p>
      <p>© Andrew Schwartz {new Date().getFullYear()}</p>
    </div>
  </footer>
)
