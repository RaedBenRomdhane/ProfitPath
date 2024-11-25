//import React from 'react';
import React, { useState } from 'react'; // Import useState
import './Add_Transactions.css';

function Add_Transactions(){
    const [type, setType] = useState('Expense'); // Tracks Income or Expense
    return(<>
    <div className="add-transaction-page">
        
      {/* Header */}
      <header className="header-add-trans">
        Add Transactions
      </header>

      {/* Transaction Type Toggle */}
      <div className="transaction-type">
        <button
          className={`type-button ${type === 'Income' ? 'active' : ''}`}
          onClick={() => setType('Income')}
        >
          Income
        </button>
        <button
          className={`type-button ${type === 'Expense' ? 'active' : ''}`}
          onClick={() => setType('Expense')}
        >
          Expense
        </button>
      </div>

      {/* Input Fields */}
      <form className="transaction-form">
        <div className="input-group">
          <span className="input-icon">$</span>
          <input
            type="number"
            placeholder="Enter Amount"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <span className="input-icon">&#128247;</span>
          <input
            type="text"
            placeholder="Select Category"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <span className="input-icon">&#9998;</span>
          <input type="text" placeholder="Write Note" className="input-field" />
        </div>

        <div className="input-group">
          <span className="input-icon">&#128197;</span>
          <input type="date" className="input-field" />
        </div>
      </form>
    </div>
    </>)
}

export default Add_Transactions