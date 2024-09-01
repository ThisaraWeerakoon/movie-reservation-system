import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Movie {
  id: number;
  movieName: string;
  imageURL: string;
  description: string;
  director: string;
  duration: number;
  genre: string;
  releaseDate: string;
}

async function fetchMovieById(id: string): Promise<Movie> {
  const res = await fetch(`http://localhost:8080/movie/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch movie data');
  }

  return res.json();
}

export default function MovieDetails({ params }: { params: { id: string } }) {
  // Call fetchMovieById in a React server component.
  // React server components don't support async directly in the component definition.
  
  const movieData = fetchMovieById(params.id).then((movie) => {
    return (
      <div>
        {/* Movie Banner */}
        <div className="w-full h-96">
          <img
            src={`/${movie.imageURL}`}
            alt={`${movie.movieName} Banner`}
            className="w-full object-cover h-64 md:h-80 lg:h-96"
          />
        </div>
        {/* Movie Details */}
        <div className="flex flex-col md:flex-row gap-8 mt-8 px-4 md:px-8">
          <div className="px-4">
            <img
              src={`/${movie.imageURL}`}
              alt={movie.movieName}
              className="h-96 rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{movie.movieName}</h1>
            <p className="text-gray-600 mb-4">{movie.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h2 className="font-semibold">Director:</h2>
                <p>{movie.director}</p>
              </div>
              <div>
                <h2 className="font-semibold">Release Date:</h2>
                <p>{new Date(movie.releaseDate).toLocaleDateString()}</p>
              </div>
              <div>
                <h2 className="font-semibold">Duration:</h2>
                <p>{movie.duration} minutes</p>
              </div>
              <div>
                <h2 className="font-semibold">Genre:</h2>
                <p>{movie.genre}</p>
              </div>
            </div>
            <Link href={`/booking/${movie.id}`} passHref>
              <Button size="lg">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return movieData;
}
