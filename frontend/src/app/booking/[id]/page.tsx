'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { useState } from 'react';

// Mock data for cinemas and showtimes
const cinemas = [
  {
    id: 1,
    name: 'Cinema City',
    showtimes: ['10:00', '13:00', '16:00', '19:00', '22:00'],
  },
  {
    id: 2,
    name: 'Mega Movies',
    showtimes: ['11:00', '14:00', '17:00', '20:00', '23:00'],
  },
  {
    id: 3,
    name: 'Star Cinema',
    showtimes: ['09:30', '12:30', '15:30', '18:30', '21:30'],
  },
];

export default function Booking({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Generate an array of the next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Book Your Movie</h1>
      <div className="mb-6">
        <Select onValueChange={setSelectedDate}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a date" />
          </SelectTrigger>
          <SelectContent>
            {dates.map((date) => (
              <SelectItem key={date} value={date}>
                {new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {cinemas.map((cinema) => (
        <div key={cinema.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{cinema.name}</h2>
          <div className="flex flex-wrap gap-4">
            {cinema.showtimes.map((time) => (
              // <Link key={time} href={`/booking/${params.id}/${cinema.id}/${selectedDate}/${time}`} passHref>
              // change this to show.id
              <Link key={time} href={`/booking/${params.id}/show/${params.id}`} passHref>
                <Button variant="outline" disabled={!selectedDate}>
                  {time}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
