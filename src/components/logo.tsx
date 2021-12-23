import React from 'react'

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../images/logo.svg' or its cor... Remove this comment to see the full error message
import LogoSvg from '../images/logo.svg'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './logo.module.scss' or its cor... Remove this comment to see the full error message
import { logo as logoStyle } from './logo.module.scss'

const Logo = ({ path, isNav }: any) => {
  return (
    <img
      src={LogoSvg}
      alt={isNav ? 'Home' : 'Andrew Schwartz logo'}
      className={logoStyle}
    />
  )
}

export default Logo
