import React from 'react'

function Total({ parts }) {
  return (
    <div>
      <p>Number of exercises { parts.reduce(( accumulator, parts ) => accumulator + parts.exercises, 0 )}</p>
    </div>
  )
}

export default Total
