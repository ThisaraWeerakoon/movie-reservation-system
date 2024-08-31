import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfileBar />
    </div>
  );
}

const ProfileBar = () => {
  return (
    <div className="profile-bar">
      <div className="breadcrumbs">
        Online Tickets → My Profile → Quikpay
      </div>
      <div className="profile-section">
        <div className="profile-picture">
          <span className="profile-icon">S</span>
          <button className="upload-button">Upload Photo</button>
        </div>
        <div className="button-group">
          <button>Booking History</button>
          <button>QuikPay</button>
          <button>Settings</button>
          <button>Sign Out</button>
        </div>
        <button className="deactivate-account">Deactivate Account</button>
      </div>
    </div>
  );
};

export default App;
