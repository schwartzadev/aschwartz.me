import React from 'react'

export default ({ count }) => (
  <>
    {Array(count)
      .fill(5)
      .map((_, i) => (
        <span key={i} role="img" aria-label="star">
          &#9733;
        </span>
      ))}
  </>
)
