// components/sections/FeaturesSection.tsx

interface FeatureCardProps {
  icon: string; // Using a simple string for icon, could be a component or image path
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: "💡",
      title: "혁신적인 아이디어",
      description: "시장을 선도하는 독창적인 아이디어로 비즈니스의 미래를 제시합니다.",
    },
    {
      icon: "⚙️",
      title: "최고의 기술력",
      description: "최신 기술 스택과 숙련된 개발팀이 안정적인 서비스를 구축합니다.",
    },
    {
      icon: "🚀",
      title: "빠른 실행 및 성장",
      description: "민첩한 개발 프로세스로 아이디어를 빠르게 구현하고 시장에 선보입니다.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          왜 우리와 함께해야 할까요?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
