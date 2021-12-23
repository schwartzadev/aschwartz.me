import React from 'react'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './table.module.scss' or its co... Remove this comment to see the full error message
import { wrapper } from './table.module.scss'

export default ({
  children
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
}: any) => <table className={wrapper}>{children}</table>
