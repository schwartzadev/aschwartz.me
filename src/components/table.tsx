import { wrapper } from './table.module.scss'
import React from 'react'

const Table = ({ children }: any) => (
  <table className={wrapper}>{children}</table>
)

export default Table
