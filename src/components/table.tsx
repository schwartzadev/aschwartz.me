import React from 'react'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './table.module.scss' or its co... Remove this comment to see the full error message
import { wrapper } from './table.module.scss'

export default ({
  children

}: any) => <table className={wrapper}>{children}</table>
