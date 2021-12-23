import React from 'react'

interface StarsProps {
  count: number
}

const Stars = ({ count }: StarsProps) => (
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

export default Stars
