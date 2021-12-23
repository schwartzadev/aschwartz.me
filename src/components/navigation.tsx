import React from 'react'
import { Link } from 'gatsby'
// @ts-expect-error ts-migrate(6142) FIXME: Module './logo' was resolved to '/home/andrew/asch... Remove this comment to see the full error message
import Logo from './logo'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../content/core.yaml' or it... Remove this comment to see the full error message
import NaviagationItems from '../../content/core.yaml'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './navigation.module.scss' or i... Remove this comment to see the full error message
import { wrapper, logoContainer, container } from './navigation.module.scss'

export default () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={wrapper} id="nav">
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={logoContainer}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Link to="/">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Logo isNav />
      </Link>
    </div>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <nav className={container} role="navigation">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {NaviagationItems.nav.map((item: any) => <Link to={item.href} key={item.name}>
        {item.name}
      </Link>)}
    </nav>
  </div>
)
