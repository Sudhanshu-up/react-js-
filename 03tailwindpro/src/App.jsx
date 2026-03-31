import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/card'
let profile={
  username:"sudhanshu",
  age:20,
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <h1 className="text-yellow-500">Test</h1>
    <p className='bg-green-300 p-4 rounded-xl text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, id laborum amet at atque quaerat necessitatibus vero repudiandae explicabo sint ducimus debitis dolore vitae iste aliquid sapiente facere nulla doloribus.</p>
    <Card/>
    <Card username="abc"/>
    <Card username ="sudhanshu" />
    
    
    </> 
  )
}

export default App
