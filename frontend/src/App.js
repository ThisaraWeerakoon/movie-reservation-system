// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    gender: 'male',
    married: 'no',
    alerts: false,
    day: '',
    month: '',
    year: '',
  });

  const [showSettings, setShowSettings] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="App">
      <button className="settings-button" onClick={toggleSettings}>
        Settings
      </button>

      {showSettings && (
        <form onSubmit={handleSubmit} className="edit-profile-form">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
            />
          </div>
          <div className="gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
          <div className="birthdate">
            <select name="day" value={formData.day} onChange={handleChange}>
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select name="month" value={formData.month} onChange={handleChange}>
              <option value="">Month</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select name="year" value={formData.year} onChange={handleChange}>
              <option value="">Year</option>
              {[...Array(101)].map((_, i) => (
                <option key={1920 + i} value={1920 + i}>
                  {1920 + i}
                </option>
              ))}
            </select>
          </div>
          <div className="married">
            <label>
              <input
                type="radio"
                name="married"
                value="yes"
                checked={formData.married === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="married"
                value="no"
                checked={formData.married === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="alerts"
                checked={formData.alerts}
                onChange={handleChange}
              />
              Get Alerts on mobile for new movies and events.
            </label>
          </div>
          <button type="submit" className="update-button">Update</button>
        </form>
      )}
    </div>
  );
}

export default App;
