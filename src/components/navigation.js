import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'
import NaviagationItems from '../../content/navigation.yaml'
import NaviagationStyles from './navigation.module.scss'

export default () => (
  <div className={NaviagationStyles.wrapper} id="nav">
    <div className={NaviagationStyles.logoContainer}>
      <Link to='/'>
        <Logo isNav />
      </Link>
    </div>
    <nav className={NaviagationStyles.container} role="navigation">
      {NaviagationItems.nav.map(item => (
        <Link to={item.href} key={item.name}>
          {item.name}
        </Link>
      ))}
    </nav>
  </div>
)
