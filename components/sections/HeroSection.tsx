// components/sections/HeroSection.tsx
import Button from '../ui/Button';
import Image from 'next/image'; // Next.js Image 컴포넌트 추가

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 overflow-hidden">
      {/* Background image or pattern for visual appeal (optional) */}
      {/* Example: <Image src="/hero-bg.jpg" alt="Background" layout="fill" objectFit="cover" quality={100} className="z-0 opacity-20" /> */}

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">
          당신의 아이디어를 현실로!
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up delay-200">
          최고의 기술력과 혁신적인 디자인으로 당신의 비즈니스를 한 단계 업그레이드하세요.
        </p>
        <Button href="#contact" variant="primary" size="lg" className="animate-fade-in-up delay-400">
          지금 문의하기
        </Button>
      </div>
    </section>
  );
}
