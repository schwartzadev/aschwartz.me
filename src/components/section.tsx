import Item from './item'
import { title, content } from './section.module.scss'
import React from 'react'

export default ({ title, items = [], htmlContent }: any) => (
  <section>
    <h1 className={title}>{title}</h1>
    {htmlContent && (
      <div
        className={content}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )}
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has
    an 'any' type.
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
