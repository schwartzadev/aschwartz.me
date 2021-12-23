import React from 'react'
import { Link } from 'gatsby'
import Hr from './hr'
import {
  container,
  title as titleStyle,
  ctasList,
  topLink,
} from './calls-to-action.module.scss'

const CallsToAction = ({ title, ctas }) => (
  <div className={container}>
    <Hr />
    <h2 className={titleStyle}>{title}</h2>
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

export default CallsToAction
