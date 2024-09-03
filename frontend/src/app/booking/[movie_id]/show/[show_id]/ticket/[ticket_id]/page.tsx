'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

export default function Component() {
    
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

  const renderSeats = (row: string, seats: number, isPremiun: boolean = false) => {
    const seatButtons = [];
    for (let i = 1; i <= seats; i++) {
      const seatIndex = `${row}${isPremiun ? '-' : ''}${i}`;
      const isOccupied = isPremiun ? occupiedPremiumSeats.includes(seatIndex) : occupiedNormalSeats.includes(seatIndex);

      seatButtons.push(
        <Button key={seatIndex} variant={isOccupied ? 'ghost' : 'outline'} size="sm" className={`w-8 h-8 p-0 m-0.5 text-xs ${isOccupied ? 'opacity-50 bg-slate-300 cursor-not-allowed' : ''}`} onClick={() => !isOccupied && console.log(seatIndex)} disabled={isOccupied}>
          {i}
        </Button>
      );
    }
    return seatButtons;
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
    </div>
  );
}
