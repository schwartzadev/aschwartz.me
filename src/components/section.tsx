import React from 'react'
// @ts-expect-error ts-migrate(6142) FIXME: Module './item' was resolved to '/home/andrew/asch... Remove this comment to see the full error message
import Item from './item'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './section.module.scss' or its ... Remove this comment to see the full error message
import { title, content } from './section.module.scss'

export default ({
  title,
  items = [],
  htmlContent
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <section>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h1 className={title}>{title}</h1>
    {htmlContent && (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div
        className={content}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )}
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
    {items.map(item => (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Item
        key={item.title}
        title={item.title}
        content={item.description}
        slug={item.slug}
      />
    ))}
  </section>
)