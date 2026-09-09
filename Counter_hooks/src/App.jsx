import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num,numValue] = useState(0)

  function CounterIncrease(){
    numValue(num +1)
  }

  function CounterDecrease(){
    numValue(num - 1)
  }
  
  return (
    <div> 
      <h1 className='heading'>Counter : {num}</h1>
      <button className='btn'   onClick={CounterIncrease}>
        Increase Counter
      </button>
      <button className='btn'  onClick={CounterDecrease}>Decrease Counter</button>
    </div>
  )
}

export default App

