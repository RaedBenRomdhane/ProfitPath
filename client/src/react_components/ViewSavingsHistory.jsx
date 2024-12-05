import './ViewSavingsHistory.css';

function ViewSavingsHistory({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Savings History</h2>

        {/* Filter Section */}
        <section className="filter-section">
          <select className="filter-select">
            <option value="all">All Goals</option>
            <option value="emergency">Emergency Fund</option>
            <option value="car">New Car</option>
            <option value="vacation">Vacation</option>
          </select>
          <input type="date" className="filter-date" />
        </section>

        {/* History List */}
        <section className="history-section">
          <div className="history-item">
            <div className="history-info">
              <h4>Emergency Fund</h4>
              <p className="date">Oct 15, 2023</p>
            </div>
            <div className="history-amount">
              <p className="amount">+$500</p>
              <p className="progress">75% Complete</p>
            </div>
          </div>

          <div className="history-item">
            <div className="history-info">
              <h4>New Car</h4>
              <p className="date">Oct 10, 2023</p>
            </div>
            <div className="history-amount">
              <p className="amount">+$700</p>
              <p className="progress">27% Complete</p>
            </div>
          </div>

          <div className="history-item">
            <div className="history-info">
              <h4>Vacation</h4>
              <p className="date">Oct 5, 2023</p>
            </div>
            <div className="history-amount">
              <p className="amount">+$300</p>
              <p className="progress">40% Complete</p>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="summary-section">
          <div className="summary-item">
            <span>Total Saved</span>
            <span className="total-amount">$25,000</span>
          </div>
          <div className="summary-item">
            <span>Total Goals</span>
            <span>3</span>
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

export default ViewSavingsHistory; 