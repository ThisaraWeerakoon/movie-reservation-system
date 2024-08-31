'use client'; // Ensure this component runs on the client side

import React, { useEffect, useState } from 'react';
import MovieForm from './movieForm'; // Adjust the path if necessary

interface Movie {
  movieName: string;
  duration: number;
  rating: number;
  releaseDate: string;
  genre: string;
  language: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:8080/movie/getAllMovies');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-5">Movie List</h1>

      {/* Include the MovieForm component and pass the onMovieAdded prop */}
      <MovieForm onMovieAdded={fetchMovies} />

      <table className="min-w-full bg-white border border-gray-300 mb-5">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Duration (min)</th>
            <th className="px-4 py-2 border-b">Rating</th>
            <th className="px-4 py-2 border-b">Release Date</th>
            <th className="px-4 py-2 border-b">Genre</th>
            <th className="px-4 py-2 border-b">Language</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b">{movie.movieName}</td>
              <td className="px-4 py-2 border-b">{movie.duration}</td>
              <td className="px-4 py-2 border-b">{movie.rating}</td>
              <td className="px-4 py-2 border-b">{new Date(movie.releaseDate).toLocaleDateString()}</td>
              <td className="px-4 py-2 border-b">{movie.genre}</td>
              <td className="px-4 py-2 border-b">{movie.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
