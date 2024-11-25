import { useState } from 'react'
import {Route ,Routes,Link} from 'react-router-dom'
import './App.css'


import NavBar from './react_components/NavBar.jsx'
import Sign_In from './react_components/Sign_In.jsx'
import Sign_Up from './react_components/Sign_Up.jsx'
import Home from './react_components/Home.jsx'
import Add_Transactions from './react_components/Add_Transactions.jsx'
import Expenses_Incomes from './react_components/Expenses_Incomes.jsx'
import Savings from './react_components/Savings.jsx'
import Investments from './react_components/Investments.jsx'


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Sign_In" element={<Sign_In/>}/>
      <Route path="/Sign_Up" element={<Sign_Up/>}/>
      <Route path="/Add_Transactions" element={<Add_Transactions/>}/>
      <Route path="/Expenses_Incomes" element={<Expenses_Incomes/>}/>
      <Route path="/Savings" element={<Savings/>}/>
      <Route path="/Investments" element={<Investments/>}/>
      </Routes>
    </>
  )
}

export default App
