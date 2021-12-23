import { container as containerStyles } from './container.module.scss'
import React from 'react'

const Container = ({ children }: any) => {
  return <div className={containerStyles}>{children}</div>
}

export default Container
