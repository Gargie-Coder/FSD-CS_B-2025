import { useState } from "react";
import React from 'react'

function StateHandling() {
  const [counter, setCounter] = useState(20);
  

  return (
    <div>
      <h2>State Handling</h2>
      <h3>Counter Value: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

    </div>
  )
}

export default StateHandling;
