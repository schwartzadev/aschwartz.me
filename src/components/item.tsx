import React from 'react'
import {
  title as titleStyle,
  content as contentStyle,
} from './item.module.scss'

const Item = ({ title, content, slug }) => (
  <div>
    <h3 className={titleStyle} id={slug}>
      {title}
    </h3>
    <div
      className={contentStyle}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
)

export default Item
