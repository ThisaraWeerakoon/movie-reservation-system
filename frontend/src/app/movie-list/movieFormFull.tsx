"use client"; // Add this directive at the top to mark this file as a Client Component

import React, { useEffect, useState } from 'react';

interface Movie {
  movieName: string;
  duration: number;
  rating: number;
  releaseDate: string;
  genre: string;
  language: string;
}

const MovieFormFull: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [form, setForm] = useState<Movie>({
    movieName: '',
    duration: 0,
    rating: 0,
    releaseDate: '',
    genre: 'DRAMA',
    language: 'HINDI',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addMovie = async () => {
    try {
      const response = await fetch('http://localhost:8080/movie/addNew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Failed to add movie');

      alert('Movie added successfully!');
      setForm({
        movieName: '',
        duration: 0,
        rating: 0,
        releaseDate: '',
        genre: 'DRAMA',
        language: 'HINDI',
      });
      fetchMovies();
    } catch (error) {
      console.error('Error adding movie:', error);
      alert('Error adding movie');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-5">Movie List</h1>
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

      <h2 className="text-2xl font-bold mb-5">Add Movie</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="movieName" className="block">Name:</label>
          <input
            type="text"
            id="movieName"
            name="movieName"
            value={form.movieName}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block">Duration:</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="rating" className="block">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            step="0.1"
            value={form.rating}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="releaseDate" className="block">Release Date:</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={form.releaseDate}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="genre" className="block">Genre:</label>
          <select
            id="genre"
            name="genre"
            value={form.genre}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="DRAMA">Drama</option>
            <option value="THRILLER">Thriller</option>
            <option value="ACTION">Action</option>
            <option value="ROMANTIC">Romantic</option>
            <option value="COMEDY">Comedy</option>
            <option value="HISTORICAL">Historical</option>
            <option value="ANIMATION">Animation</option>
            <option value="SPORTS">Sports</option>
            <option value="SOCIAL">Social</option>
            <option value="WAR">War</option>
          </select>
        </div>

        <div>
          <label htmlFor="language" className="block">Language:</label>
          <select
            id="language"
            name="language"
            value={form.language}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="HINDI">Hindi</option>
            <option value="ENGLISH">English</option>
            <option value="TELUGU">Telugu</option>
            <option value="TAMIL">Tamil</option>
            <option value="MARATHI">Marathi</option>
            <option value="PUNJAB">Punjabi</option>
            <option value="KANNADA">Kannada</option>
          </select>
        </div>

        <button
          type="button"
          onClick={addMovie}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieFormFull;
