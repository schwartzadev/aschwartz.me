import { wrapper } from './table.module.scss'
import React from 'react'

export default ({ children }: any) => (
  <table className={wrapper}>{children}</table>
)
