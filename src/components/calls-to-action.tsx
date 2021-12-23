import React from 'react'
import { Link } from 'gatsby'
// @ts-expect-error ts-migrate(6142) FIXME: Module './hr' was resolved to '/home/andrew/aschwa... Remove this comment to see the full error message
import Hr from './hr'
import {
  container,
  title as titleStyle,
  ctasList,
  topLink,
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './calls-to-action.module.scss'... Remove this comment to see the full error message
} from './calls-to-action.module.scss'

const CallsToAction = ({
  title,
  ctas
}: any) => (

  <div className={container}>

    <Hr />

    <h2 className={titleStyle}>{title}</h2>

    <ul className={ctasList}>

      {ctas.map((cta: any) => <li key={cta.name}>
        {cta.external ? (

          <a href={cta.href}>{cta.name}</a>
        ) : (

          <Link to={cta.href}>{cta.name}</Link>
        )}
      </li>)}
    </ul>

    <a className={topLink} href="#nav">
      Back to top.
    </a>
  </div>
)

export default CallsToAction
