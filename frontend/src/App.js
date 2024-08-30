import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import MovieList from './components/MovieList';
import Login from './components/Login';  // Import the Login component

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />
        <NavigationBar />
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/login" element={<Login />} /> {/* Add the Login route */}
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1',
    padding: '20px',
  },
};

export default App;
