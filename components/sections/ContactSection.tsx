// components/sections/ContactSection.tsx

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4">프로젝트 문의</h2>
        <p className="text-xl mb-8">
          귀사의 비즈니스를 위한 맞춤형 솔루션에 대해 지금 바로 문의하세요.
        </p>
        <p className="text-lg">
          이메일: <a href="mailto:contact@example.com" className="underline hover:text-blue-200">contact@example.com</a>
        </p>
        <p className="text-lg mt-2">
          전화: <a href="tel:+1234567890" className="underline hover:text-blue-200">+1 (234) 567-890</a>
        </p>
        {/* No form as per requirements */}
      </div>
    </section>
  );
}
