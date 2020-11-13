import React from 'react'

function Part({ part, exercise}) {
  return ( <p>
    {part} {exercise}
  </p> )
  
}

function Content({ part1, exercises1, part2, exercises2, part3, exercises3 }) {
  return (
    <>
      <Part1 part={part1} exercise={exercise1}  />
      <Part1 part={part2} exercise={exercise2}  />
      <Part1 part={part3} exercise={exercise3}  />
    </>
  )
}
export default Content
