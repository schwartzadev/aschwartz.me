import {
  title as titleStyle,
  content as contentStyle,
} from './item.module.scss'
import React from 'react'

const Item = ({ title, content, slug }: any) => (
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
