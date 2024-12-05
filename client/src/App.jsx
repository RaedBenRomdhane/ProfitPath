import { useState } from 'react'
import {Route ,Routes,Link} from 'react-router-dom'
import './App.css'


import NavBar from './react_components/NavBar.jsx'
import Sign_In from './pages/Sign_In.jsx'
import Sign_Up from './pages/Sign_Up.jsx'
import Home from './pages/Home.jsx'
import Expenses_Incomes from './pages/Expenses_Incomes.jsx'
import Savings from './pages/Savings.jsx'
import Investments from './pages/Investments.jsx'


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sign_In" element={<Sign_In/>}/>
        <Route path="/Sign_Up" element={<Sign_Up/>}/>
        <Route path="/Expenses_Incomes" element={<Expenses_Incomes/>}/>
        <Route path="/Savings" element={<Savings/>}/>
        <Route path="/Investments" element={<Investments/>}/>
      </Routes>
    </>
  )
}

export default App
