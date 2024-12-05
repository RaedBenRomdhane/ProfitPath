import './ViewAnalytics.css';

function ViewAnalytics({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Analytics Dashboard</h2>
        
        {/* Monthly Summary */}
        <section className="analytics-section">
          <h3>Monthly Summary</h3>
          <div className="summary-cards">
            <div className="analytics-card">
              <h4>Total Income</h4>
              <p className="amount income">$4,000</p>
            </div>
            <div className="analytics-card">
              <h4>Total Expenses</h4>
              <p className="amount expense">$2,500</p>
            </div>
            <div className="analytics-card">
              <h4>Net Savings</h4>
              <p className="amount savings">$1,500</p>
            </div>
          </div>
        </section>

        {/* Category Breakdown */}
        <section className="analytics-section">
          <h3>Expense Categories</h3>
          <div className="category-list">
            <div className="category-item">
              <span>Rent</span>
              <div className="bar-container">
                <div className="bar" style={{ width: '48%' }}></div>
                <span>48%</span>
              </div>
            </div>
            <div className="category-item">
              <span>Groceries</span>
              <div className="bar-container">
                <div className="bar" style={{ width: '20%' }}></div>
                <span>20%</span>
              </div>
            </div>
            <div className="category-item">
              <span>Utilities</span>
              <div className="bar-container">
                <div className="bar" style={{ width: '15%' }}></div>
                <span>15%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Close Button */}
        <div className="modal-actions">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewAnalytics; 