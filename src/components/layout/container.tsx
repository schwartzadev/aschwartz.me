import React from 'react'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './container.module.scss' or it... Remove this comment to see the full error message
import { container } from './container.module.scss'

export default ({
  children
}: any) => {

  return <div className={container}>{children}</div>
}
