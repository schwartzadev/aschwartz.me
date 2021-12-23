import React from 'react'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './hr.module.scss' or its corre... Remove this comment to see the full error message
import { hr } from './hr.module.scss'


const Hr = () => <hr className={hr} />
export default Hr
