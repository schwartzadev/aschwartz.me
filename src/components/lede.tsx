import { lede as ledeStyle } from './lede.module.scss'
import React from 'react'

const Lede = ({ children }: { children: string }) => (
  <h2 className={ledeStyle}>{children}</h2>
)
export default Lede
