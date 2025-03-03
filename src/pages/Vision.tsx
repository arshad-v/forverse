import React from 'react';
import { Target, Lightbulb, Users, Rocket } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      title: 'Our Mission',
      description: 'To empower businesses with cutting-edge AI solutions that drive innovation and sustainable growth.',
      icon: Target,
    },
    {
      title: 'Our Vision',
      description: 'To be the global leader in AI transformation, setting new standards for technological excellence and innovation.',
      icon: Lightbulb,
    },
    {
      title: 'Our Values',
      description: 'Innovation, integrity, and client success drive everything we do, ensuring lasting partnerships and exceptional results.',
      icon: Users,
    },
    {
      title: 'Our Future',
      description: 'Pioneering the next generation of AI solutions that will reshape industries and create new possibilities.',
      icon: Rocket,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Shaping the Future of AI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our vision is to revolutionize how businesses operate through innovative AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* Vision Points */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700/50 transition-all group"
              >
                <point.icon className="h-12 w-12 text-blue-500 mb-6 group-hover:text-blue-400 transition-colors" />
                <h3 className="text-2xl font-semibold text-white mb-4">{point.title}</h3>
                <p className="text-gray-400 text-lg">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;