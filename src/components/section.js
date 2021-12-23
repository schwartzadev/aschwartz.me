import React from 'react'
import Item from './item'
import { title, content } from './section.module.scss'

export default ({ title, items = [], htmlContent }) => (
  <section>
    <h1 className={title}>{title}</h1>
    {htmlContent && (
      <div
        className={content}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )}
    {items.map(item => (
      <Item
        key={item.title}
        title={item.title}
        content={item.description}
        slug={item.slug}
      />
    ))}
  </section>
)
