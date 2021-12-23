// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../content/core.yaml' or it... Remove this comment to see the full error message
import NaviagationItems from '../../content/core.yaml'
import Logo from './logo'
import { wrapper, logoContainer, container } from './navigation.module.scss'
import { Link } from 'gatsby'
import React from 'react'

export default () => (
  <div className={wrapper} id="nav">
    <div className={logoContainer}>
      <Link to="/">
        <Logo isNav />
      </Link>
    </div>

    <nav className={container} role="navigation">
      {NaviagationItems.nav.map((item: any) => (
        <Link to={item.href} key={item.name}>
          {item.name}
        </Link>
      ))}
    </nav>
  </div>
)
