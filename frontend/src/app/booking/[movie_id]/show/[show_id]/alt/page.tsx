'use client';

import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Mock data for seats
const generateSeats = (totalSeats: number) => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = Math.ceil(totalSeats / rows.length);
  return rows
    .flatMap((row) =>
      Array.from({ length: seatsPerRow }, (_, i) => ({
        id: `${row}${i + 1}`,
        row,
        number: i + 1,
        isAvailable: Math.random() > 0.2, // Randomly make some seats unavailable
      }))
    )
    .slice(0, totalSeats);
};

export default function SeatBooking({ params }: { params: { id: string; cinemaId: string; date: string; time: string } }) {
  const [seats, setSeats] = useState(generateSeats(64));
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const numberOfSeats = parseInt(searchParams.get('seats') || '1', 10);

  useEffect(() => {
    // In a real application, you would fetch the actual seat data here
    setSeats(generateSeats(64));
  }, []);

  const toggleSeat = (seatId: string) => {
    setSelectedSeats((prev) => (prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId].slice(-numberOfSeats)));
  };

  const handleNext = () => {
    if (selectedSeats.length === numberOfSeats) {
      router.push(`/booking/${params.id}/confirm?seats=${selectedSeats.join(',')}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Select Your Seats</h1>
      <div className="mb-6">
        <p>Movie: Movie {params.id}</p>
        <p>Cinema: Cinema {params.cinemaId}</p>
        <p>Date: {params.date}</p>
        <p>Time: {params.time}</p>
      </div>
      <div className="grid grid-cols-8 gap-2 mb-6">
        {seats.map((seat) => (
          <Button
            key={seat.id}
            variant={selectedSeats.includes(seat.id) ? 'default' : 'outline'}
            onClick={() => toggleSeat(seat.id)}
            disabled={!seat.isAvailable || (selectedSeats.length === numberOfSeats && !selectedSeats.includes(seat.id))}
            className="w-10 h-10"
          >
            {seat.id}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p>Selected Seats: {selectedSeats.join(', ')}</p>
        <Button onClick={handleNext} disabled={selectedSeats.length !== numberOfSeats}>
          Next
        </Button>
      </div>
    </div>
  );
}
