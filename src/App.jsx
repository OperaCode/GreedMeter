import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import GreedMeterInfo from './pages/GreedMeterInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/greedmeter-info' element={<GreedMeterInfo/>}/>
     </Routes>
    </>
  )
}

export default App
