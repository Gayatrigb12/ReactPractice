import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const addValue = () =>{
    
    if(counter>=20)
      {
        setCounter(counter)
      }else{
      setCounter(counter+1);
      }
   
  }
  const removeValue = () =>{
    // counter = counter+1;
    if(counter<=0)
    {
      setCounter(counter)
    }else{
    setCounter(counter-1);
    }
  }
  return (
    
    <>
     <h1>HELLOOOO</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}>add value {counter}</button><br />
     <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
