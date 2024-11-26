import { useState } from 'react';
import './Expenses_Incomes.css';
import AddTransaction from '../react_components/AddTransaction';
import ViewAnalytics from '../react_components/ViewAnalytics';
import ExportData from '../react_components/ExportData';

function Expenses_Incomes() {
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showExport, setShowExport] = useState(false);

  return (
    <div className="expenses-incomes-page">
      {/* Summary Section */}
      <section className="summary-section">
        <div className="summary-card expenses-card">
          <p className="summary-title">Total Expenses</p>
          <h2 className="summary-amount">$2,500</h2>
        </div>
        <div className="summary-card incomes-card">
          <p className="summary-title">Total Income</p>
          <h2 className="summary-amount">$4,000</h2>
        </div>
      </section>

      {/* Transactions Container */}
      <div className="transactions-container">
        {/* Expenses Section */}
        <section className="transactions-section">
          <h3 className="section-title">Recent Expenses</h3>
          <ul className="transactions-list">
            <li className="transaction-item">
              <div className="transaction-details">
                <span className="transaction-category">Groceries</span>
                <span className="transaction-date">Oct 15, 2023</span>
              </div>
              <span className="transaction-amount amount-expense">-$150</span>
            </li>
            <li className="transaction-item">
              <div className="transaction-details">
                <span className="transaction-category">Rent</span>
                <span className="transaction-date">Oct 1, 2023</span>
              </div>
              <span className="transaction-amount amount-expense">-$1,200</span>
            </li>
            <li className="transaction-item">
              <div className="transaction-details">
                <span className="transaction-category">Utilities</span>
                <span className="transaction-date">Oct 5, 2023</span>
              </div>
              <span className="transaction-amount amount-expense">-$200</span>
            </li>
          </ul>
        </section>

        {/* Incomes Section */}
        <section className="transactions-section">
          <h3 className="section-title">Recent Income</h3>
          <ul className="transactions-list">
            <li className="transaction-item">
              <div className="transaction-details">
                <span className="transaction-category">Salary</span>
                <span className="transaction-date">Oct 1, 2023</span>
              </div>
              <span className="transaction-amount amount-income">+$3,500</span>
            </li>
            <li className="transaction-item">
              <div className="transaction-details">
                <span className="transaction-category">Freelance</span>
                <span className="transaction-date">Oct 10, 2023</span>
              </div>
              <span className="transaction-amount amount-income">+$300</span>
            </li>
            <li className="transaction-item">
              <div className="transaction-details">
                <span className="transaction-category">Interest</span>
                <span className="transaction-date">Oct 15, 2023</span>
              </div>
              <span className="transaction-amount amount-income">+$200</span>
            </li>
          </ul>
        </section>
      </div>

      {/* Action Buttons */}
      <section className="action-buttons">
        <button className="action-button add-transaction" onClick={() => setShowAddTransaction(true)}>
          + Add Transaction
        </button>
        <button className="action-button view-analytics" onClick={() => setShowAnalytics(true)}>
          View Analytics
        </button>
        <button className="action-button export-data" onClick={() => setShowExport(true)}>
          Export Data
        </button>
      </section>

      {/* Modals */}
      <AddTransaction 
        isOpen={showAddTransaction}
        onClose={() => setShowAddTransaction(false)}
      />
      <ViewAnalytics 
        isOpen={showAnalytics}
        onClose={() => setShowAnalytics(false)}
      />
      <ExportData 
        isOpen={showExport}
        onClose={() => setShowExport(false)}
      />
    </div>
  );
}

export default Expenses_Incomes;