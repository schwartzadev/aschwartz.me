import React from 'react'
import Item from './item'
import SectionStyles from './section.module.scss'

export default ({ title, items = [], htmlContent }) => (
  <section>
    <h1 className={SectionStyles.title}>{title}</h1>
    {htmlContent && (
      <div
        className={SectionStyles.content}
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
