// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Recent Bookings');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      {/* Navigation Menu */}
      <div className="nav-bar">
        <div className="nav-item active">Booking History</div>
      </div>

      {/* Sub-Navigation Menu */}
      <div className="sub-nav-bar">
        <div
          className={`sub-nav-item ${activeTab === 'Recent Bookings' ? 'active' : ''}`}
          onClick={() => handleTabClick('Recent Bookings')}
        >
          Recent Bookings
        </div>
        <div
          className={`sub-nav-item ${activeTab === 'Pre-booking' ? 'active' : ''}`}
          onClick={() => handleTabClick('Pre-booking')}
        >
          Pre-booking
        </div>
        <div
          className={`sub-nav-item ${activeTab === 'Merchandise' ? 'active' : ''}`}
          onClick={() => handleTabClick('Merchandise')}
        >
          Merchandise
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="content">
        {activeTab === 'Recent Bookings' && <div>Your recent bookings will appear here.</div>}
        {activeTab === 'Pre-booking' && <div>Your pre-booking options will appear here.</div>}
        {activeTab === 'Merchandise' && <div>Your merchandise options will appear here.</div>}
      </div>
    </div>
  );
}

export default App;
