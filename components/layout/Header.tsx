// components/layout/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          My Landing Page
        </Link>
        {/* Navigation - as per design, no complex navigation needed for now */}
      </div>
    </header>
  );
}
