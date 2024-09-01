import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

// Define the Movie interface
interface Movie {
  id: number;
  movieName: string;
  duration: number;
  rating: number;
  releaseDate: string;
  genre: string;
  language: string;
  imageURL: string;
  description: string;
  director: string;
}

// Fetch data directly in the component
export default async function Home() {
  let movies: Movie[] = [];

  try {
    // Fetch data from your backend API
    const res = await fetch('http://localhost:8080/movie', { cache: 'no-store' });  // Prevent caching for fresh data
    movies = await res.json();  // Parse the JSON response to get the movies
  } catch (error) {
    console.error('Error fetching movies:', error);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Card key={movie.id}>
            <CardContent className="p-4">
              <img
                src={movie.imageURL}
                alt={movie.movieName}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{movie.movieName}</h2>
            </CardContent>
            <CardFooter>
              <Link href={`/movie/${movie.id}`} passHref>
                <Button className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
