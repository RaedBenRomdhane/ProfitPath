import { useState } from 'react';
import './CreateGoal.css';

function CreateGoal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    deadline: '',
    initialDeposit: '',
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
    console.log('Goal data:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Saving Goal</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Goal Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter goal name"
              required
            />
          </div>

          <div className="form-group">
            <label>Target Amount</label>
            <input
              type="number"
              name="targetAmount"
              value={formData.targetAmount}
              onChange={handleInputChange}
              placeholder="Enter target amount"
              required
            />
          </div>

          <div className="form-group">
            <label>Target Date</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Initial Deposit (Optional)</label>
            <input
              type="number"
              name="initialDeposit"
              value={formData.initialDeposit}
              onChange={handleInputChange}
              placeholder="Enter initial deposit"
            />
          </div>

          <div className="form-group">
            <label>Note (Optional)</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              placeholder="Add a note about your goal"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Create Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateGoal; 