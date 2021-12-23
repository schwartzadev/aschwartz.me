import React from 'react'
import { Link } from 'gatsby'
import Hr from './hr'
import {
  container,
  title,
  ctasList,
  topLink,
} from './calls-to-action.module.scss'

export default ({ title, ctas }) => (
  <div className={container}>
    <Hr />
    <h2 className={title}>{title}</h2>
    <ul className={ctasList}>
      {ctas.map(cta => (
        <li key={cta.name}>
          {cta.external ? (
            <a href={cta.href}>{cta.name}</a>
          ) : (
            <Link to={cta.href}>{cta.name}</Link>
          )}
        </li>
      ))}
    </ul>
    <a className={topLink} href="#nav">
      Back to top.
    </a>
  </div>
)
