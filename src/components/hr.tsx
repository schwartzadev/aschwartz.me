import React from 'react'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './hr.module.scss' or its corre... Remove this comment to see the full error message
import { hr } from './hr.module.scss'

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const Hr = () => <hr className={hr} />
export default Hr
