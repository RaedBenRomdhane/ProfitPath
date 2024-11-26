import { useState } from 'react';
import './Savings.css';
import AddSaving from '../react_components/AddSaving';
import CreateGoal from '../react_components/CreateGoal';
import ViewSavingsHistory from '../react_components/ViewSavingsHistory';

function Savings() {
  const [showAddSaving, setShowAddSaving] = useState(false);
  const [showCreateGoal, setShowCreateGoal] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="savings-page">
      {/* Savings Summary Section */}
      <section className="savings-summary">
        <div className="summary-card total-savings">
          <p className="summary-title">Total Savings</p>
          <h2 className="summary-amount">$25,000</h2>
        </div>
        <div className="summary-card monthly-savings">
          <p className="summary-title">Monthly Savings</p>
          <h2 className="summary-amount">$1,500</h2>
        </div>
      </section>

      {/* Savings Goals Section */}
      <section className="savings-goals">
        <h3 className="section-title">Savings Goals</h3>
        <ul className="goals-list">
          <li className="goal-item">
            <div className="goal-header">
              <span className="goal-name">Emergency Fund</span>
              <span className="goal-amount">$15,000 / $20,000</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '75%' }}></div>
            </div>
            <div className="progress-labels">
              <span>75% Complete</span>
              <span>$5,000 to go</span>
            </div>
          </li>
          <li className="goal-item">
            <div className="goal-header">
              <span className="goal-name">New Car</span>
              <span className="goal-amount">$8,000 / $30,000</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '27%' }}></div>
            </div>
            <div className="progress-labels">
              <span>27% Complete</span>
              <span>$22,000 to go</span>
            </div>
          </li>
          <li className="goal-item">
            <div className="goal-header">
              <span className="goal-name">Vacation</span>
              <span className="goal-amount">$2,000 / $5,000</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '40%' }}></div>
            </div>
            <div className="progress-labels">
              <span>40% Complete</span>
              <span>$3,000 to go</span>
            </div>
          </li>
        </ul>
      </section>

      {/* Recent Savings Section */}
      <section className="recent-savings">
        <h3 className="section-title">Recent Savings</h3>
        <ul className="savings-list">
          <li className="saving-item">
            <div className="saving-details">
              <span className="saving-category">Emergency Fund</span>
              <span className="saving-date">Oct 15, 2023</span>
            </div>
            <span className="saving-amount">+$500</span>
          </li>
          <li className="saving-item">
            <div className="saving-details">
              <span className="saving-category">New Car</span>
              <span className="saving-date">Oct 10, 2023</span>
            </div>
            <span className="saving-amount">+$700</span>
          </li>
          <li className="saving-item">
            <div className="saving-details">
              <span className="saving-category">Vacation</span>
              <span className="saving-date">Oct 5, 2023</span>
            </div>
            <span className="saving-amount">+$300</span>
          </li>
        </ul>
      </section>

      {/* Action Buttons */}
      <section className="action-buttons">
        <button 
          className="action-button add-saving"
          onClick={() => setShowAddSaving(true)}
          style={{ backgroundColor: '#0D47A1', color: 'white', padding: '15px', borderRadius: '10px', width: '100%', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' }}
        >
          + Add Saving
        </button>
        <button 
          className="action-button add-goal"
          onClick={() => setShowCreateGoal(true)}
          style={{ backgroundColor: '#007BFF', color: 'white', padding: '15px', borderRadius: '10px', width: '100%', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' }}
        >
          Create New Goal
        </button>
        <button 
          className="action-button view-history"
          onClick={() => setShowHistory(true)}
          style={{ backgroundColor: '#C0C0C0', color: 'black', padding: '15px', borderRadius: '10px', width: '100%', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          View History
        </button>
      </section>

      {/* Modals */}
      <AddSaving 
        isOpen={showAddSaving}
        onClose={() => setShowAddSaving(false)}
      />
      <CreateGoal 
        isOpen={showCreateGoal}
        onClose={() => setShowCreateGoal(false)}
      />
      <ViewSavingsHistory 
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
      />
    </div>
  );
}

export default Savings;