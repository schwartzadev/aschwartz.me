import React from 'react'
import { title, content } from './item.module.scss'

export default ({ title, content, slug }) => (
  <div>
    <h3 className={title} id={slug}>
      {title}
    </h3>
    <div className={content} dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)
