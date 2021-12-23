import React from 'react'
import {
  title as titleStyle,
  content as contentStyle,
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './item.module.scss' or its cor... Remove this comment to see the full error message
} from './item.module.scss'

const Item = ({
  title,
  content,
  slug
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h3 className={titleStyle} id={slug}>
      {title}
    </h3>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div
      className={contentStyle}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
)

export default Item
