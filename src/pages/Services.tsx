import React from 'react';
import { Bot, Cpu, Database, LineChart, MessageSquare, Code, Brain, Network, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs, from machine learning models to neural networks.',
      icon: Brain,
    },
    {
      title: 'Autonomous Agents',
      description: 'Intelligent agents that automate complex tasks and workflows with advanced decision-making capabilities.',
      icon: Bot,
    },
    {
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions that reduce manual work and increase efficiency.',
      icon: Cpu,
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
      icon: LineChart,
    },
    {
      title: 'Chatbot Solutions',
      description: 'Intelligent conversational AI that enhances customer service and engagement across platforms.',
      icon: MessageSquare,
    },
    {
      title: 'Database Solutions',
      description: 'Robust database design and management with AI-powered optimization and scaling.',
      icon: Database,
    },
    {
      title: 'Custom Development',
      description: 'Full-stack development services tailored to your specific business requirements and goals.',
      icon: Code,
    },
    {
      title: 'API Integration',
      description: 'Seamless integration services connecting your systems with modern API architectures.',
      icon: Network,
    },
    {
      title: 'Security Solutions',
      description: 'AI-powered security measures to protect your data and systems from emerging threats.',
      icon: Lock,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30" />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Transformative AI Solutions
              <br />
              for Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered services designed to revolutionize
              your business operations and drive innovation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-700/50 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <service.icon className="h-12 w-12 text-blue-500 mb-6 group-hover:text-blue-400 transition-colors" />
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              We Integrate With Your Ecosystem
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              At Forverse.ai, we integrate advanced AI solutions to optimize operations, enhance customer experiences, and drive growth. Transform your business and stay ahead in a rapidly evolving marketplace.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span>Start Your Integration Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;