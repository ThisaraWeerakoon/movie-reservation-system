'use client';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';
import { MovieForm } from './movieForm';

interface Movie {
  movieName: string;
  duration: number;
  rating: number;
  releaseDate: string;
  genre: string;
  language: string;
}

export function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/movie/getAllMovies');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch movies. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Movie List</h1>

      <MovieForm onMovieAdded={fetchMovies} />

      {isLoading ? (
        <p className="text-center">Loading movies...</p>
      ) : (
        <Table>
          <TableCaption>A list of all movies</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Duration (min)</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Release Date</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>Language</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movies.map((movie, index) => (
              <TableRow key={index}>
                <TableCell>{movie.movieName}</TableCell>
                <TableCell>{movie.duration}</TableCell>
                <TableCell>{movie.rating}</TableCell>
                <TableCell>{new Date(movie.releaseDate).toLocaleDateString()}</TableCell>
                <TableCell>{movie.genre}</TableCell>
                <TableCell>{movie.language}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
