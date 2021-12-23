import {
  container,
  title as titleStyle,
  ctasList,
  topLink,
} from './calls-to-action.module.scss'
import Hr from './hr'
import { Link } from 'gatsby'
import React from 'react'

const CallsToAction = ({ title, ctas }: any) => (
  <div className={container}>
    <Hr />

    <h2 className={titleStyle}>{title}</h2>

    <ul className={ctasList}>
      {ctas.map((cta: any) => (
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
