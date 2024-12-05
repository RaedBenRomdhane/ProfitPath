import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home(){
  const navigate = useNavigate();

  return(<>
    <div className="home-page">
      {/* Account Balance Section */}
      <section className="account-balance-section">
        <div className="balance-card">
          <p className="balance-title">Account Balance</p>
          <h2 className="balance-amount">$150,000</h2>
        </div>
      </section>

      {/* Latest Transactions Section */}
      <section className="transactions-section">
        <h3 className="section-title">Latest Transaction</h3>
        <ul className="transactions-list">
          <li className="transaction">
            <span className="transaction-amount positive">+1000</span>
            <span className="transaction-category">Salary</span>
          </li>
          <li className="transaction">
            <span className="transaction-amount negative">-150</span>
            <span className="transaction-category">Grocery</span>
          </li>
          <li className="transaction">
            <span className="transaction-amount positive">+200</span>
            <span className="transaction-category">Refunds</span>
          </li>
          <li className="transaction">
            <span className="transaction-amount negative">-500</span>
            <span className="transaction-category">Rentals</span>
          </li>
        </ul>
      </section>

      {/* Action Buttons Section */}
      <section className="actions-section">
        <div className="row-buttons">
            <button className="action-button add-transactions" onClick={() => navigate('/Expenses_Incomes')}>+ Add Transactions</button>
        </div>
        <div className="row-buttons">
          <button className="action-button check-expenses" onClick={() => navigate('/Expenses_Incomes')}>Check Expenses</button>
          <button className="action-button check-incomes" onClick={() => navigate('/Expenses_Incomes')}>Check Incomes</button>
        </div>
        <div className="row-buttons">
          <button className="action-button add-saving" onClick={() => navigate('/Savings')}>Add Saving</button>
          <button className="action-button investments" onClick={() => navigate('/Investments')}>Investments</button>
        </div>
      </section>
    </div>
    </>)
}

export default Home