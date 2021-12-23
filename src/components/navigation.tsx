// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../content/core.yaml' or it... Remove this comment to see the full error message
import NavigationItems from '../../content/core.yaml'
import Logo from './logo'
import { wrapper, logoContainer, container } from './navigation.module.scss'
import { Link } from 'gatsby'
import React from 'react'

const Navigation = () => (
  <div className={wrapper} id="nav">
    <div className={logoContainer}>
      <Link to="/">
        <Logo />
      </Link>
    </div>

    <nav className={container} role="navigation">
      {NavigationItems.nav.map((item: any) => (
        <Link to={item.href} key={item.name}>
          {item.name}
        </Link>
      ))}
    </nav>
  </div>
)

export default Navigation
