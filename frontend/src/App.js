
// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showQuickPay, setShowQuickPay] = useState(true);
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number1: '',
    number2: '',
    number3: '',
    number4: '',
    name: '',
    expMonth: '',
    expYear: '',
    cardName: '',
  });

  const toggleQuickPay = () => {
    setShowQuickPay(!showQuickPay);
  };

  const handleAddCardClick = () => {
    setShowAddCardForm(true);
  };

  const handleCloseForm = () => {
    setShowAddCardForm(false);
  };

  const handleCardDetailChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSaveCard = (e) => {
    e.preventDefault();
    console.log('Card details saved:', cardDetails);
    setShowAddCardForm(false); // Close the form after saving
  };

  return (
    <div className="App">
      {/* QuickPay Section */}
      {showQuickPay && (
        <div className="quickpay-section">
          <div className="card-container">
            <div className="card-header">
              Credit/Debit Cards
              <span className="add-button" onClick={handleAddCardClick}>+ Add</span>
            </div>
            <div className="card-body">
              {!showAddCardForm ? (
                <p>You don't have any Credit/Debit cards added to QuikPay.</p>
              ) : (
                <form className="card-form" onSubmit={handleSaveCard}>
                  <h2>Add your card here</h2>
                  <p>Enter card details</p>
                  <div className="card-inputs">
                    <input
                      type="text"
                      name="number1"
                      value={cardDetails.number1}
                      onChange={handleCardDetailChange}
                      placeholder="XXXX"
                      maxLength="4"
                    />
                    <input
                      type="text"
                      name="number2"
                      value={cardDetails.number2}
                      onChange={handleCardDetailChange}
                      placeholder="XXXX"
                      maxLength="4"
                    />
                    <input
                      type="text"
                      name="number3"
                      value={cardDetails.number3}
                      onChange={handleCardDetailChange}
                      placeholder="XXXX"
                      maxLength="4"
                    />
                    <input
                      type="text"
                      name="number4"
                      value={cardDetails.number4}
                      onChange={handleCardDetailChange}
                      placeholder="XXXX"
                      maxLength="4"
                    />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={cardDetails.name}
                    onChange={handleCardDetailChange}
                    placeholder="Name on the card"
                  />
                  <div className="card-expiry">
                    <input
                      type="text"
                      name="expMonth"
                      value={cardDetails.expMonth}
                      onChange={handleCardDetailChange}
                      placeholder="MM"
                      maxLength="2"
                    />
                    <input
                      type="text"
                      name="expYear"
                      value={cardDetails.expYear}
                      onChange={handleCardDetailChange}
                      placeholder="YY"
                      maxLength="2"
                    />
                  </div>
                  <input
                    type="text"
                    name="cardName"
                    value={cardDetails.cardName}
                    onChange={handleCardDetailChange}
                    placeholder="NAME OF THE CARD (e.g., FAMILY CARD)"
                  />
                  <button type="submit" className="save-card-button">Save Card</button>
                  <button type="button" className="close-form-button" onClick={handleCloseForm}>Cancel</button>
                </form>
              )}
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
