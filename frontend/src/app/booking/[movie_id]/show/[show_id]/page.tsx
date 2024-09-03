'use client';

import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Component() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const showId = searchParams.get('showId');
  const date = searchParams.get('date');
  const seatsParam = searchParams.get('seats');
  const maxSeats = seatsParam ? parseInt(seatsParam, 10) : 4;

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const rows = ['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  const seatsPerRow = [18, 18, 18, 16, 16, 16, 16, 16, 16, 16];
  const premiumRows = ['P2', 'P1'];
  const premiumSeatsPerRow = [6, 6];

  // Occupied seats
  const occupiedNormalSeats = ['A1', 'B5', 'C10', 'F7', 'J18'];
  const occupiedPremiumSeats = ['DL1-3', 'DL2-1'];
  const prices = {
    normal: {
      full: 1400,
      half: 1300,
    },
    premium: {
      full: 2600,
      half: 2500,
    },
  };

  const handleSeatClick = (seatIndex: string) => {
    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(seatIndex)) {
        return prevSeats.filter((seat) => seat !== seatIndex);
      } else if (prevSeats.length < maxSeats) {
        return [...prevSeats, seatIndex];
      } else {
        return [...prevSeats.slice(1), seatIndex];
      }
    });
  };

  const renderSeats = (row: string, seats: number, isPremium: boolean = false) => {
    const seatButtons = [];
    for (let i = 1; i <= seats; i++) {
      const seatIndex = `${row}${isPremium ? '-' : ''}${i}`;
      const isOccupied = isPremium ? occupiedPremiumSeats.includes(seatIndex) : occupiedNormalSeats.includes(seatIndex);
      const isSelected = selectedSeats.includes(seatIndex);

      seatButtons.push(
        <Button
          key={seatIndex}
          variant={isOccupied ? 'ghost' : isSelected ? 'default' : 'outline'}
          size="sm"
          className={`w-8 h-8 p-0 m-0.5 text-xs ${isOccupied ? 'opacity-50 bg-slate-300 cursor-not-allowed' : ''} ${isSelected ? 'bg-green-500 hover:bg-green-600' : ''}`}
          onClick={() => !isOccupied && handleSeatClick(seatIndex)}
          disabled={isOccupied}
        >
          {i}
        </Button>
      );
    }
    return seatButtons;
  };

  const handleNext = () => {
    if (selectedSeats.length === maxSeats) {
      const selectedSeatsParam = selectedSeats.join('-');
      router.push(`/booking/${id}/show/${showId}/ticket/1/?date=${date}&seats=${maxSeats}&selected_seats=${selectedSeatsParam}`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-background">
      <h1 className="text-xl font-bold mb-4">Theater</h1>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">
          [ PREMIUM ] FULL (LKR{prices.premium.full}.00) / HALF (LKR{prices.premium.half}.00)
        </h2>
        {premiumRows.map((row, index) => (
          <div key={row} className="flex items-center mb-2">
            <span className="mr-2 font-semibold w-8">{row}</span>
            {renderSeats(row, premiumSeatsPerRow[index], true)}
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">
          [ ODC ] FULL (LKR{prices.normal.full}.00) / HALF (LKR{prices.normal.half}.00)
        </h2>
        {rows.map((row, index) => (
          <div key={row} className="flex items-center mb-2">
            <span className="mr-2 font-semibold w-4">{row}</span>
            {renderSeats(row, seatsPerRow[index])}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm font-semibold">SCREEN</p>
        <div className="w-full h-2 bg-blue-200 mt-2 rounded-full"></div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Selected Seats: {selectedSeats.join(', ')}</h2>
        <Button onClick={handleNext} disabled={selectedSeats.length !== maxSeats} className="w-full">
          Next
        </Button>
      </div>
    </div>
  );
}
