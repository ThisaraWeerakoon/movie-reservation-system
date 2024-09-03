'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Mock data for cinemas and showtimes
const cinemas = [
  {
    id: 1,
    name: 'Cinema City',
    showtimes: [
      { time: '10:00', show_id: 's100' },
      { time: '13:00', show_id: 's101' },
      { time: '16:00', show_id: 's102' },
      { time: '19:00', show_id: 's103' },
      { time: '22:00', show_id: 's104' },
    ],
  },
  {
    id: 2,
    name: 'Mega Movies',
    showtimes: [
      { time: '11:00', show_id: 's200' },
      { time: '14:00', show_id: 's201' },
      { time: '17:00', show_id: 's202' },
      { time: '20:00', show_id: 's203' },
      { time: '23:00', show_id: 's204' },
    ],
  },
  {
    id: 3,
    name: 'Star Cinema',
    showtimes: [
      { time: '09:30', show_id: 's300' },
      { time: '12:30', show_id: 's301' },
      { time: '15:30', show_id: 's302' },
      { time: '18:30', show_id: 's303' },
      { time: '21:30', show_id: 's304' },
    ],
  },
];

export default function Booking({ params }: { params: { movie_id: string } }) {
  const [selectedDate, setSelectedDate] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [selectedCinema, setSelectedCinema] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedShowId, setSelectedShowId] = useState<string>(''); // New state to keep track of the show ID
  const [numberOfSeats, setNumberOfSeats] = useState<number>(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  // Generate an array of the next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  useEffect(() => {
    if (selectedDate) {
      router.replace(`/booking/${params.movie_id}?date=${selectedDate}`);
    }
  }, [selectedDate, router, params.movie_id]);

  const handleTimeSelection = (cinemaId: string, showtime: { time: string; show_id: string }) => {
    setSelectedCinema(cinemaId);
    setSelectedTime(showtime.time);
    setSelectedShowId(showtime.show_id); // Store the show ID in the state
    setIsDialogOpen(true);
  };

  const handleSeatSelection = () => {
    setIsDialogOpen(false);
    router.push(`/booking/${params.movie_id}/show/${selectedShowId}?date=${selectedDate}?seats=${numberOfSeats}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book Your Movie</h1>
      <div className="mb-6">
        <Select onValueChange={setSelectedDate}>
          <SelectTrigger className="w-full">
            <SelectValue>{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</SelectValue>
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
            {cinema.showtimes.map((showtime) => (
              <Button key={showtime.time} variant="outline" disabled={!selectedDate} onClick={() => handleTimeSelection(cinema.id.toString(), showtime)}>
                {showtime.time}
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
