// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showQuickPay, setShowQuickPay] = useState(false);

  const toggleQuickPay = () => {
    setShowQuickPay(!showQuickPay);
  };

  return (
    <div className="App">
      {/* QuickPay Button */}
      <button className="quickpay-button" onClick={toggleQuickPay}>
        QuickPay
      </button>

      {/* QuickPay Section */}
      {showQuickPay && (
        <div className="quickpay-section">
          <div className="card-container">
            <div className="card-header">
              Credit/Debit Cards
              <span className="add-button">+ Add</span>
            </div>
            <div className="card-body">
              You don't have any Credit/Debit cards added to QuikPay.
            </div>
          </div>

          <div className="card-container">
            <div className="card-header">
              Other Wallets
            </div>
            <div className="card-body">
              You don't have any External Wallets added to QuikPay.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
