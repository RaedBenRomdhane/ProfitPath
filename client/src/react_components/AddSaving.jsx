import { useState } from 'react';
import './AddSaving.css';

function AddSaving({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    amount: '',
    goal: '',
    date: new Date().toISOString().split('T')[0],
    note: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving data:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Saving</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="form-group">
            <label>Saving Goal</label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              required
            >
              <option value="">Select goal</option>
              <option value="emergency">Emergency Fund</option>
              <option value="car">New Car</option>
              <option value="vacation">Vacation</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Note (Optional)</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              placeholder="Add a note"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Add Saving
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSaving; 