'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ConfirmBooking({ params }: { params: { movie_id: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSeats = searchParams.get('seats')?.split(',') || [];
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  const handleProceed = () => {
    if (termsAccepted) {
      setIsPaymentDialogOpen(true);
    }
  };

  const handlePayment = () => {
    // In a real application, you would process the payment here
    router.push(`/booking/${params.movie_id}/invoice?seats=${selectedSeats.join(',')}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Booking Summary</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Tickets once booked cannot be exchanged or refunded.</li>
            <li>No refund on a purchased ticket is possible, even in case of any rescheduling.</li>
            <li>Ticket purchased is valid only for the particular show & cannot be exchanged or used for other shows/cities.</li>
            <li>We recommend that you arrive at least 30 minutes prior at the venue to pick up your physical tickets.</li>
            <li>The event is subject to government permissions. In case the permissions are not granted and event is cancelled, a refund shall be issued to all patrons.</li>
            <li>Unlawful resale (or attempted unlawful resale) of a ticket would lead to seizure or cancellation of that ticket without refund or other compensation.</li>
            <li>Each ticket admits one person only.</li>
            <li>Internet handling fee per ticket may be levied.</li>
            <li>Organizers reserve the right to perform security checks on invitees/members of the audience at the entry point for security reasons.</li>
            <li>Persons under the influence of alcohol or any substances will not be allowed inside the venue, any kind of disrespect or harm to Actors & crew will not be tolerated.</li>
            <li>Organizers or any of its agents, officers, employees shall not be responsible for any injury, damage, theft, losses or cost suffered at or as a result of the event or any part of it.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
          <div className="space-y-2">
            <p>Movie: Movie {params.movie_id}</p>
            <p>Seats: {selectedSeats.join(', ')}</p>
            <p>Total: LKR {selectedSeats.length * 700}.00</p>
            <p>Internet handling fees: LKR {selectedSeats.length * 70}.00</p>
            <p className="font-bold">Amount Payable: LKR {selectedSeats.length * 770}.00</p>
          </div>
          <div className="mt-6 flex items-center space-x-2">
            <Checkbox id="terms" checked={termsAccepted} onCheckedChange={(checked) => setTermsAccepted(checked as boolean)} />
            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I have verified the cinema name, show date and time before proceeding to payment. Once booked cinema does not allow us to Refund/Modify the booking.
            </label>
          </div>
          <Button onClick={handleProceed} disabled={!termsAccepted} className="mt-4">
            Proceed to Payment
          </Button>
        </div>
      </div>

      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit_card" id="credit_card" />
                <Label htmlFor="credit_card">Credit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="debit_card" id="debit_card" />
                <Label htmlFor="debit_card">Debit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="net_banking" id="net_banking" />
                <Label htmlFor="net_banking">Net Banking</Label>
              </div>
            </RadioGroup>

            {(paymentMethod === 'credit_card' || paymentMethod === 'debit_card') && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="card_number">Card Number</Label>
                  <Input id="card_number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'net_banking' && (
              <div>
                <Label htmlFor="bank">Select Bank</Label>
                <Select>
                  <SelectTrigger id="bank">
                    <SelectValue placeholder="Select your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank1">Bank 1</SelectItem>
                    <SelectItem value="bank2">Bank 2</SelectItem>
                    <SelectItem value="bank3">Bank 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button onClick={handlePayment} className="w-full">
              Pay LKR {selectedSeats.length * 770}.00
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
