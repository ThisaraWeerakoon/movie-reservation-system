'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Inter } from 'next/font/google';
import { default as Link } from 'next/link';
import { useState } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // New state for registration form
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <nav className="flex items-center justify-between p-2 bg-gray-800 text-slate-500">
          <Link href="/" className="text-xl font-bold">
            Movie Booking System
          </Link>
          <div className="flex items-center space-x-2">
            <Input type="search" placeholder="Search movies..." className="text-black" />
            <Button variant="outline">Search</Button>
            <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Sign In</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sign In</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" type="text" />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                  <Button
                    type="button"
                    variant="link"
                    className="w-full text-center"
                    onClick={() => {
                      setIsSignInOpen(false);
                      setIsRegisterOpen(true);
                    }}
                  >
                    Register
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Register</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" type="text" />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input id="mobile" type="text" />
                  </div>
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Contact Us</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                  </div>
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" type="text" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </nav>
        <main className="container mx-auto flex-grow py-8">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 Movie Booking System. All rights reserved.</p>
          <p>About us: We provide the best movie booking experience.</p>
        </footer>
      </body>
    </html>
  );
}
