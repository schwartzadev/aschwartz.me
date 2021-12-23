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
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={container}>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Hr />
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h2 className={titleStyle}>{title}</h2>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ul className={ctasList}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {ctas.map((cta: any) => <li key={cta.name}>
        {cta.external ? (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <a href={cta.href}>{cta.name}</a>
        ) : (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link to={cta.href}>{cta.name}</Link>
        )}
      </li>)}
    </ul>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <a className={topLink} href="#nav">
      Back to top.
    </a>
  </div>
)

export default CallsToAction
