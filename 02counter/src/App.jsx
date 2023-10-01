import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)


let addvalue=()=>{
  if(counter!=20){

    setCounter(counter+1)
  }
}
let removeValue=()=>{
  if(counter!=0)
  setCounter(counter-1)
}
  return (
    <>
      <h1>value Counter</h1>
      <h2>value:{counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>


    </>
  )
}

export default App
