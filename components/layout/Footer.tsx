// components/layout/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {currentYear} My Landing Page. All rights reserved.</p>
      </div>
    </footer>
  );
}
