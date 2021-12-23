import React from 'react'

export default ({
  count
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    {Array(count)
      .fill(5)
      .map((_, i) => (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span key={i} role="img" aria-label="star">
          &#9733;
        </span>
      ))}
  </>
)
