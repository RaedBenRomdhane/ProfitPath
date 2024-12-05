import './ExportData.css';

function ExportData({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleExport = (format) => {
    alert(`Exporting data in ${format} format...`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Export Data</h2>
        
        <div className="export-options">
          <div className="export-card" onClick={() => handleExport('PDF')}>
            <div className="export-icon">📄</div>
            <h3>PDF Report</h3>
            <p>Complete financial report with graphs and analysis</p>
          </div>

          <div className="export-card" onClick={() => handleExport('Excel')}>
            <div className="export-icon">📊</div>
            <h3>Excel Spreadsheet</h3>
            <p>Detailed transaction data in Excel format</p>
          </div>

          <div className="export-card" onClick={() => handleExport('CSV')}>
            <div className="export-icon">📑</div>
            <h3>CSV File</h3>
            <p>Raw data in comma-separated format</p>
          </div>
        </div>

        <div className="export-settings">
          <h3>Export Settings</h3>
          <div className="settings-group">
            <label>
              <input type="checkbox" defaultChecked />
              Include transaction details
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Include analytics
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Include charts and graphs
            </label>
          </div>
        </div>

        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExportData; 