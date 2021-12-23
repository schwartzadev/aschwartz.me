import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'
import NaviagationItems from '../../content/core.yaml'
import { wrapper, logoContainer, container } from './navigation.module.scss'

export default () => (
  <div className={wrapper} id="nav">
    <div className={logoContainer}>
      <Link to="/">
        <Logo isNav />
      </Link>
    </div>
    <nav className={container} role="navigation">
      {NaviagationItems.nav.map(item => (
        <Link to={item.href} key={item.name}>
          {item.name}
        </Link>
      ))}
    </nav>
  </div>
)
