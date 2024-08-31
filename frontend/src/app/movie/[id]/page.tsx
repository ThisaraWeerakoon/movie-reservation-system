import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Mock data for a single movie
const movieDetails = {
  id: 1,
  title: 'Inception',
  image: '/card.jpg?height=600&width=400',
  banner: '/banner.jpg', // Add a banner image URL here
  description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
  director: 'Christopher Nolan',
  cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
  duration: '2h 28min',
  genre: 'Action, Adventure, Sci-Fi',
};

export default function MovieDetails({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the movie details based on the id
  // For this example, we're using mock data

  return (
    <div>
      {/* Movie Banner */}
      <div className="w-full h-96">
        <img src={movieDetails.banner} alt={`${movieDetails.title} Banner`} className="w-full object-cover h-64 md:h-80 lg:h-96" />
      </div>
      {/* Movie Details */}
      <div className="flex flex-col md:flex-row gap-8 mt-8 px-4 md:px-8">
        <div className="px-4">
          <img src={movieDetails.image} alt={movieDetails.title} className="h-96 rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{movieDetails.title}</h1>
          <p className="text-gray-600 mb-4">{movieDetails.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="font-semibold">Director:</h2>
              <p>{movieDetails.director}</p>
            </div>
            <div>
              <h2 className="font-semibold">Cast:</h2>
              <p>{movieDetails.cast.join(', ')}</p>
            </div>
            <div>
              <h2 className="font-semibold">Duration:</h2>
              <p>{movieDetails.duration}</p>
            </div>
            <div>
              <h2 className="font-semibold">Genre:</h2>
              <p>{movieDetails.genre}</p>
            </div>
          </div>
          <Link href={`/booking/${params.id}`} passHref>
            <Button size="lg">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
