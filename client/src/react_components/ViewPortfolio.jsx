import './ViewPortfolio.css';

function ViewPortfolio({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Portfolio Details</h2>

        {/* Portfolio Summary */}
        <section className="portfolio-summary">
          <div className="summary-card">
            <h3>Total Value</h3>
            <p className="value">$75,000</p>
            <p className="change positive">+4.2% ($3,150)</p>
          </div>
        </section>

        {/* Asset Allocation */}
        <section className="portfolio-section">
          <h3>Asset Allocation</h3>
          <div className="allocation-grid">
            <div className="allocation-item">
              <div className="allocation-header">
                <span>Stocks</span>
                <span>45%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="allocation-item">
              <div className="allocation-header">
                <span>ETFs</span>
                <span>30%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div className="allocation-item">
              <div className="allocation-header">
                <span>Bonds</span>
                <span>25%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="portfolio-section">
          <h3>Performance Metrics</h3>
          <div className="metrics-grid">
            <div className="metric-card">
              <h4>Annual Return</h4>
              <p className="metric-value positive">+12.5%</p>
            </div>
            <div className="metric-card">
              <h4>Risk Level</h4>
              <p className="metric-value">Moderate</p>
            </div>
            <div className="metric-card">
              <h4>Dividend Yield</h4>
              <p className="metric-value">2.8%</p>
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

export default ViewPortfolio; 