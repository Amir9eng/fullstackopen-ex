import React from 'react'

function Part({ part, exercises}) {
  return ( <p>
    {part.name} {part.exercises}
  </p> )
  
}

function Content({ parts }) {
  return (
    <div>
      {parts.map((part, partIndex) => <Part key = {`part_${partIndex}`} part= {part} /> )}
    </div>
  )
}
export default Content
