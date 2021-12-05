import React from 'react'
import TableStyles from './table.module.scss'

export default ({ children }) => (
  <table className={TableStyles.wrapper}>{children}</table>
)
