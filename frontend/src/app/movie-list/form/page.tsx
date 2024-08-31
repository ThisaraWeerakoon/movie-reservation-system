'use client';
import MovieForm from './movieForm';

export default function Home() {
  return (
    <main>
      <MovieForm onMovieAdded={function (): void {}} />
    </main>
  );
}
