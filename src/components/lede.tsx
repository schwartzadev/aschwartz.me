import React from 'react'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './lede.module.scss' or its cor... Remove this comment to see the full error message
import { lede } from './lede.module.scss'

const Lede = ({
  children
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
}: any) => <h2 className={lede}>{children}</h2>
export default Lede
