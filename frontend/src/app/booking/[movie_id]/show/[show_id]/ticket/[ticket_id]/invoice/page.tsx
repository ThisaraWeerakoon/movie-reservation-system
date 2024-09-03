'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSearchParams } from 'next/navigation';

// Mock data for movie details
const movieDetails = {
  title: 'Inception',
  cinema: 'Cinema City',
  date: '2023-07-15',
  time: '19:00',
};

export default function TicketInvoice({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const selectedSeats = searchParams.get('seats')?.split(',') || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">E-Ticket Invoice</h1>
      <Card>
        <CardHeader>
          <CardTitle>Movie Ticket</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h1>
              <strong>Movie:</strong> {movieDetails.title}
            </h1>
            <p>
              <strong>Cinema:</strong> {movieDetails.cinema}
            </p>
            <p>
              <strong>Date:</strong> {movieDetails.date}
            </p>
            <p>
              <strong>Time:</strong> {movieDetails.time}
            </p>
            <p>
              <strong>Seats:</strong> {selectedSeats.join(', ')}
            </p>
            <p>
              <strong>Total Amount Paid:</strong> LKR {selectedSeats.length * 770}.00
            </p>
            <p>
              <strong>Code:</strong> QSDF74FA64FA7SD3AS75A4V7
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
