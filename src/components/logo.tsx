// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../images/logo.svg' or its cor... Remove this comment to see the full error message
import LogoSvg from '../images/logo.svg'
import { logo as logoStyle } from './logo.module.scss'
import React from 'react'

const Logo = () => {
  return <img src={LogoSvg} alt="Home" className={logoStyle} />
}

export default Logo
