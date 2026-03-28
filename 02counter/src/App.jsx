import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  
  let [counter, setcounter] = useState(15)

  const Addcount = () => {
    if(counter<20){
      setcounter(counter+1)
    };
    // counter = counter + 1;
    
  };
  const RemoveCount = () => {
    if(counter>0){
      setcounter(counter-1);
    };

  }
    

  return (
    <>
      <h1>Counter App</h1>
      <br />
      <h2>YOUR VALUE: {counter}</h2>
      <br />
      <button
        onClick={Addcount}>AddCount: {counter}</button>
      <br />
      <button
        onClick={RemoveCount}>RemoveCount: {counter}</button>
    </>
  )
}

export default App
