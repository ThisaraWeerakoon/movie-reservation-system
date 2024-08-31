import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

// Mock data for movies
const movies = [
  { id: 1, title: 'Inception', image: '/card.jpg' },
  { id: 2, title: 'The Dark Knight', image: '/card.jpg' },
  { id: 3, title: 'Interstellar', image: '/card.jpg' },
  { id: 4, title: 'Pulp Fiction', image: '/card.jpg' },
  { id: 5, title: 'The Matrix', image: '/card.jpg' },
  { id: 6, title: 'Forrest Gump', image: '/card.jpg' },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Card key={movie.id}>
            <CardContent className="p-4">
              <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover mb-4 rounded" />
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
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
