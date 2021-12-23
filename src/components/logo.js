import React from 'react'

import LogoSvg from '../images/logo.svg'
import { logo as logoStyle } from './logo.module.scss'

const Logo = ({ path, isNav }) => {
  return (
    <img
      src={LogoSvg}
      alt={isNav ? 'Home' : 'Andrew Schwartz logo'}
      className={logoStyle}
    />
  )
}

export default Logo
