import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Movie Ticket Booking System</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
  },
};

export default Header;
