import { useState } from "react"

 export function useCounter (i = 0){
  const [counter, setCount] = useState(i)
  
  function handleIncrementCounter (){
    setCount((c) => c + 1)
  }
  function handleDecrementCounter (){
    setCount((c) => c - 1)
  }
  function handleResetCounter (){
    setCount(i)
  }
  return {
    counter: counter,
    onIncrement: handleIncrementCounter,
    onDecrement: handleDecrementCounter,
    onReset: handleResetCounter
  }
    
}