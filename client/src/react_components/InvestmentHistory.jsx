import './InvestmentHistory.css';

function InvestmentHistory({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Investment History</h2>

        {/* Filter Section */}
        <section className="filter-section">
          <select className="filter-select">
            <option value="all">All Transactions</option>
            <option value="buy">Buy Orders</option>
            <option value="sell">Sell Orders</option>
          </select>
          <input type="date" className="filter-date" />
        </section>

        {/* History List */}
        <section className="history-section">
          <div className="history-item">
            <div className="history-info">
              <h4>Tech Growth Fund</h4>
              <p className="transaction-type buy">Buy Order</p>
              <p className="date">Oct 15, 2023</p>
            </div>
            <div className="history-amount">
              <p className="amount">$10,000</p>
              <p className="shares">50 shares @ $200</p>
            </div>
          </div>

          <div className="history-item">
            <div className="history-info">
              <h4>S&P 500 ETF</h4>
              <p className="transaction-type buy">Buy Order</p>
              <p className="date">Oct 10, 2023</p>
            </div>
            <div className="history-amount">
              <p className="amount">$15,000</p>
              <p className="shares">35 shares @ $428.57</p>
            </div>
          </div>

          <div className="history-item">
            <div className="history-info">
              <h4>Corporate Bonds</h4>
              <p className="transaction-type sell">Sell Order</p>
              <p className="date">Oct 5, 2023</p>
            </div>
            <div className="history-amount">
              <p className="amount">$5,000</p>
              <p className="shares">50 units @ $100</p>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="summary-section">
          <div className="summary-item">
            <span>Total Invested</span>
            <span className="total-amount">$75,000</span>
          </div>
          <div className="summary-item">
            <span>Total Transactions</span>
            <span>15</span>
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

export default InvestmentHistory; 