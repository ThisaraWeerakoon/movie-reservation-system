'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  const [selectedCinema, setSelectedCinema] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [numberOfSeats, setNumberOfSeats] = useState<number>(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  // Generate an array of the next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  const handleTimeSelection = (cinemaId: string, time: string) => {
    setSelectedCinema(cinemaId);
    setSelectedTime(time);
    setIsDialogOpen(true);
  };

  const handleSeatSelection = () => {
    setIsDialogOpen(false);
    router.push(`/booking/${params.id}/${selectedCinema}/${selectedDate}/${selectedTime}?seats=${numberOfSeats}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
              <Button key={time} variant="outline" disabled={!selectedDate} onClick={() => handleTimeSelection(cinema.id.toString(), time)}>
                {time}
              </Button>
            ))}
          </div>
        </div>
      ))}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How many seats?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-wrap justify-center gap-3 py-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Button key={num} variant={numberOfSeats === num ? 'default' : 'outline'} className="w-7 h-9 rounded-full" onClick={() => setNumberOfSeats(num)}>
                {num}
              </Button>
            ))}
          </div>
          <Button onClick={handleSeatSelection} className="w-full">
            Select Seats
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
