import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <Link href="/" className="text-2xl font-bold">
            MovieBooker
          </Link>
          <div className="flex items-center space-x-2">
            <Input type="search" placeholder="Search movies..." className="text-black" />
            <Button variant="outline">Search</Button>
          </div>
        </nav>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2023 MovieBooker. All rights reserved.</p>
          <p>About us: We provide the best movie booking experience.</p>
        </footer>
      </body>
    </html>
  );
}
