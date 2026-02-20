import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Inter 폰트 사용
import "./globals.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js 랜딩 페이지",
  description: "간단하고 반응형인 Next.js 기반 랜딩 페이지 구현",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{/* Header의 고정 높이만큼 패딩 */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
