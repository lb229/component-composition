import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"
import { useEffect } from "react"
import { useCounter } from "./HookCounter"

export function Counter ({i = 0}){
  const {counter, onIncrement, onDecrement, onReset} = useCounter(i)


  useEffect(() => {console.log(`Counter Value: ${counter}`)}, [counter, i])

 
  return (
    <div>
      <CounterDisplay counter={counter}/>

      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}
