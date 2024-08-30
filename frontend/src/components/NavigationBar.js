import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/movies" style={styles.navLink}>Movies</Link></li>
        <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
        <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.loginButton}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#444',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  loginButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
  },
};

export default NavigationBar;
