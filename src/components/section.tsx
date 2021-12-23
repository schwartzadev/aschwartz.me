import SectionItem from './section-item'
import { title as titleStyle, content } from './section.module.scss'
import React from 'react'

interface SectionProps {
  title: string
  items: any[]
  htmlContent?: string
}

const Section = ({ title, items = [], htmlContent }: SectionProps) => (
  <section>
    <h1 className={titleStyle}>{title}</h1>
    {htmlContent && (
      <div
        className={content}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )}
    {items.map(item => (
      <SectionItem
        key={item.title}
        title={item.title}
        content={item.description}
        slug={item.slug}
      />
    ))}
  </section>
)

export default Section
