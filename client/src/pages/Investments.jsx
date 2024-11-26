import { useState } from 'react';
import './Investments.css';
import AddInvestment from '../react_components/AddInvestment';
import ViewPortfolio from '../react_components/ViewPortfolio';
import InvestmentHistory from '../react_components/InvestmentHistory';

function Investments() {
  const [showAddInvestment, setShowAddInvestment] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="investments-page">
      {/* Portfolio Value Section */}
      <section className="portfolio-section">
        <div className="portfolio-card">
          <p className="portfolio-title">Total Portfolio Value</p>
          <h2 className="portfolio-amount">$75,000</h2>
        </div>
      </section>

      {/* Current Investments Section */}
      <section className="investments-section">
        <h3>Current Investments</h3>
        <ul className="investments-list">
          <li className="investment-item">
            <div className="investment-details">
              <span className="investment-name">Tech Growth Fund</span>
              <span className="investment-type">Mutual Fund</span>
            </div>
            <div className="investment-value">
              <span className="investment-amount">$30,000</span>
              <span className="investment-change change-positive">+5.2%</span>
            </div>
          </li>
          <li className="investment-item">
            <div className="investment-details">
              <span className="investment-name">S&P 500 ETF</span>
              <span className="investment-type">ETF</span>
            </div>
            <div className="investment-value">
              <span className="investment-amount">$25,000</span>
              <span className="investment-change change-positive">+3.8%</span>
            </div>
          </li>
          <li className="investment-item">
            <div className="investment-details">
              <span className="investment-name">Corporate Bonds</span>
              <span className="investment-type">Bonds</span>
            </div>
            <div className="investment-value">
              <span className="investment-amount">$20,000</span>
              <span className="investment-change change-negative">-0.5%</span>
            </div>
          </li>
        </ul>
      </section>

      {/* Action Buttons Section */}
      <section className="action-buttons">
        <button className="investment-button add-investment" onClick={() => setShowAddInvestment(true)}>
          + Add Investment
        </button>
        <button className="investment-button view-portfolio" onClick={() => setShowPortfolio(true)}>
          View Portfolio Details
        </button>
        <button className="investment-button investment-history" onClick={() => setShowHistory(true)}>
          Investment History
        </button>
      </section>

      {/* Modals */}
      <AddInvestment 
        isOpen={showAddInvestment}
        onClose={() => setShowAddInvestment(false)}
      />
      <ViewPortfolio 
        isOpen={showPortfolio}
        onClose={() => setShowPortfolio(false)}
      />
      <InvestmentHistory 
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
      />
    </div>
  );
}

export default Investments;