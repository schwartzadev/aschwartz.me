import {
  title as titleStyle,
  content as contentStyle,
} from './section-item.module.scss'
import React from 'react'

const SectionItem = ({ title, content, slug }: SectionItem) => (
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

export default SectionItem
