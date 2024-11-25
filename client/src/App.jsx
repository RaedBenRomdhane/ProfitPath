import { useState } from 'react'
import {Route ,Routes,Link} from 'react-router-dom'
import './App.css'
import NavBar from './react_components/NavBar.jsx'
import Sign_In from './react_components/Sign_In.jsx'
import Sign_Up from './react_components/Sign_Up.jsx'
function App() {

  return (
    <>
      <NavBar/>
      <Routes>
      <Route path="/" element={<p>Home</p>}/>
      <Route path="/Sign_In" element={<Sign_In/>}/>
      <Route path="/Sign_Up" element={<Sign_Up/>}/>
      <Route path="/Add_Transactions" element={<p>Add_Transactions</p>}/>
      <Route path="/Expenses_Incomes" element={<p>Expenses_Incomes</p>}/>
      <Route path="/Savings" element={<p>Savings</p>}/>
      <Route path="/Investments" element={<p>Investments</p>}/>
      </Routes>
    </>
  )
}

export default App
