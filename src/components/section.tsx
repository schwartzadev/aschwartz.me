import Item from './item'
import { title, content } from './section.module.scss'
import React from 'react'

interface SectionProps {
  title: string
  items: any[]
  htmlContent?: string
}

const Section = ({ title, items = [], htmlContent }: SectionProps) => (
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

export default Section
