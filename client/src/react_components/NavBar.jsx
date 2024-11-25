
import React from 'react';
import './NavBar.css'; // Import the CSS file for styling


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/logo.png" height="50"></img>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Add_Transactions">Add Transactions</a></li>
        <li><a href="/Expenses_Incomes">Expenses Incomes</a></li>
        <li><a href="/Savings">Savings</a></li>
        <li><a href="/Investments">Investments</a></li>
        <li><a href="/Sign_In" className="btn btn-signin">Sign In</a></li>
        <li><a href="/Sign_Up" className="btn btn-signup">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
