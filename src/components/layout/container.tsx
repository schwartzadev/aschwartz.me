import { container } from './container.module.scss'
import React from 'react'

export default ({ children }: any) => {
  return <div className={container}>{children}</div>
}
