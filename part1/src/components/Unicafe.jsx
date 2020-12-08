import React, { useState } from 'react'

 const Unicafe = () => {
  const [good, setGood] = useState(1)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
   
    <div>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
    </div>
  )
}

export default Unicafe
