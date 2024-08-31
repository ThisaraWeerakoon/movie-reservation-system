import React, { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from an API or use dummy data
    const fetchMovies = async () => {
      // Example API call
      const response = await fetch('http://localhost:8080/movie/getAllMovies');
      const data = await response.json();
      console.log(data)
      data = [
        { id: 1, title: 'Movie A', description: 'Description of Movie A' },
        { id: 2, title: 'Movie B', description: 'Description of Movie B' },
        { id: 3, title: 'Movie C', description: 'Description of Movie C' },
      ];
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div style={styles.movieList}>
      {movies.map(movie => (
        <div key={movie.id} style={styles.movieCard}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <button style={styles.button}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  movieList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px',
  },
  movieCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default MovieList;
