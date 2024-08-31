'use client'; // Ensure this component runs on the client side

import React, { useState } from 'react';

interface MovieFormProps {
  onMovieAdded: () => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ onMovieAdded }) => {
  const [form, setForm] = useState({
    movieName: '',
    duration: 0,
    rating: 0,
    releaseDate: '',
    genre: 'DRAMA',
    language: 'HINDI',
  });

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

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add movie');
      }

      alert('Movie added successfully!');
      setForm({
        movieName: '',
        duration: 0,
        rating: 0,
        releaseDate: '',
        genre: 'DRAMA',
        language: 'HINDI',
      });

      onMovieAdded(); // Notify parent component to refresh the movie list
    } catch (error) {
      console.error('Error adding movie:', error);
      alert(`Error adding movie`);
    }
  };

  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold mb-5">Add Movie</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="movieName" className="block">
            Name:
          </label>
          <input type="text" id="movieName" name="movieName" value={form.movieName} onChange={handleChange} required className="border p-2 w-full" />
        </div>

        <div>
          <label htmlFor="duration" className="block">
            Duration:
          </label>
          <input type="number" id="duration" name="duration" value={form.duration} onChange={handleChange} className="border p-2 w-full" />
        </div>

        <div>
          <label htmlFor="rating" className="block">
            Rating:
          </label>
          <input type="number" id="rating" name="rating" step="0.1" value={form.rating} onChange={handleChange} className="border p-2 w-full" />
        </div>

        <div>
          <label htmlFor="releaseDate" className="block">
            Release Date:
          </label>
          <input type="date" id="releaseDate" name="releaseDate" value={form.releaseDate} onChange={handleChange} className="border p-2 w-full" />
        </div>

        <div>
          <label htmlFor="genre" className="block">
            Genre:
          </label>
          <select id="genre" name="genre" value={form.genre} onChange={handleChange} className="border p-2 w-full">
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
          <label htmlFor="language" className="block">
            Language:
          </label>
          <select id="language" name="language" value={form.language} onChange={handleChange} className="border p-2 w-full">
            <option value="HINDI">Hindi</option>
            <option value="ENGLISH">English</option>
            <option value="TELUGU">Telugu</option>
            <option value="TAMIL">Tamil</option>
            <option value="MARATHI">Marathi</option>
            <option value="PUNJAB">Punjabi</option>
            <option value="KANNADA">Kannada</option>
          </select>
        </div>

        <button type="button" onClick={addMovie} className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
