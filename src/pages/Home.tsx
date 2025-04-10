import React from 'react';
import { ArrowRight, Bot, Cpu, Database, LineChart, MessageSquare, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import Chatbot from '../components/Chatbot';

const Home = () => {
  const services = [
    {
      title: 'Autonomous Agent Solutions',
      description: 'Advanced AI agents that revolutionize business operations, streamline workflows, and adapt to your needs.',
      icon: Bot,
    },
    {
      title: 'Seamless Workflow Automation',
      description: 'Simplify processes with our workflow automation tools and robust API integration solutions.',
      icon: Cpu,
    },
    {
      title: 'AI Chatbot Innovation',
      description: 'Transform customer engagement with intelligent AI chatbots delivering personalized responses.',
      icon: MessageSquare,
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Harness the power of your data with advanced analytics and machine learning solutions.',
      icon: LineChart,
    },
    {
      title: 'Custom AI Solutions',
      description: "We provide tailored AI solutions for any unique business need - if it's not listed, we can still make it happen!",
      icon: Database,
    },
    {
      title: 'Software Development',
      description: 'Craft scalable, user-friendly front-end interfaces and robust back-end systems to deliver seamless digital experiences tailored to your business needs.',
      icon: Code,
    },
  ];
  const testimonials = [
    {
      quote: "Forverse.ai transformed our customer service operations with their conversational AI solution. Response times improved by 78% and customer satisfaction scores increased dramatically.",
      author: "Sarah Chen",
      position: "CTO, Enterprise Solutions Inc."
    },
    {
      quote: "The agentic AI workflow system Forverse.ai built for us eliminated 40+ hours of manual work per week. Their expertise in AI implementation is unmatched.",
      author: "James Wilson",
      position: "Operations Director, Nexus Technologies"
    },
    {
      quote: "From concept to deployment in just 8 weeks. Forverse.ai delivered a custom generative AI solution that has become central to our content strategy.",
      author: "Maya Rodriguez",
      position: "Chief Innovation Officer, MediaSphere"
    }
  ];
  // Partner logos (placeholder data)
  const partners = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`
  }));


  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-36 overflow-hidden rounded-3xl mt-4 mx-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          <div
            className="absolute inset-0 bg-[url('https://i.postimg.cc/LXLmm6Q7/Pics-Art-01-23-05-49-30.jpg')] bg-center bg-no-repeat transform perspective-1000 rotate-y-6 scale-105 shadow-2xl"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Your AI Innovation Partner
              </h1>
              <p className="text-lg text-gray-100 mb-8 max-w-2xl">
                Explore our innovative AI solutions designed to transform your business<br />
                operations and drive exponential growth in the digital era
              </p>
              <div className="flex justify-start space-x-4">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 active:translate-y-0 flex items-center space-x-2 group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3 border border-gray-600 rounded-lg text-gray-300 font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 active:translate-y-0"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        

        {/* Stats Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700">
                <p className="text-4xl font-bold text-blue-400 mb-2">97%</p>
                <p className="text-gray-300 text-sm">Client Satisfaction</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700">
                <p className="text-4xl font-bold text-blue-400 mb-2">10+</p>
                <p className="text-gray-300 text-sm">Enterprise Clients</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700">
                <p className="text-4xl font-bold text-blue-400 mb-2">68%</p>
                <p className="text-gray-300 text-sm">Avg. Efficiency Gains</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700">
                <p className="text-4xl font-bold text-blue-400 mb-2">3.1x</p>
                <p className="text-gray-300 text-sm">Average ROI</p>
              </div>
            </div>
          </div>
        </section>
        {/* Agentic AI Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://i.postimg.cc/6Q3RzJ2m/agent1.webp"
                  alt="Agentic AI in action - AI agents collaborating in a digital workspace"
                  className="rounded-xl shadow-2xl max-h-96 w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  The Power of Agentic AI
                </h2>
                <p className="text-gray-400 mb-6">
                  Agentic AI represents the next evolution in artificial intelligence - autonomous systems that can think, learn, and act independently to solve complex problems. Our AI agents are designed to:
                </p>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Bot className="h-3 w-3 text-blue-500" />
                    </span>
                    <span>Autonomously manage workflows and decision-making processes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Cpu className="h-3 w-3 text-blue-500" />
                    </span>
                    <span>Continuously learn and adapt to new challenges and environments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Database className="h-3 w-3 text-blue-500" />
                    </span>
                    <span>Integrate seamlessly with existing systems and data infrastructure</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <LineChart className="h-3 w-3 text-blue-500" />
                    </span>
                    <span>Provide real-time insights and predictive analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Generative AI Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-2">
                <img
                  src="https://i.postimg.cc/FK4cZ1Ms/hero2.webp"
                  alt="Generative AI creating digital art and content"
                  className="rounded-xl shadow-2xl max-h-96 w-full"
                />
              </div>
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  The Creativity of Generative AI
                </h2>
                <p className="text-gray-400 mb-6">
                  Generative AI is revolutionizing content creation, enabling businesses to produce high-quality, personalized content at scale. Our Generative AI solutions offer:
                </p>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Bot className="h-3 w-3 text-blue-500" />
                    </span>
                    <span>AI-powered content generation for marketing and communications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Cpu className="h-3 w-3 text-blue-500" />
                    </span>
                    <span>Automated design and creative asset production</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Database className="h-3 w-3 text-blue-500" />
                    </span>
                    <span>Personalized content tailored to individual user preferences</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <LineChart className="h-3 w-3 text-blue-500" />
                    </span>
                    <span>Data-driven insights for content optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gradient-to-b from-gray-800/50 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Solutions That Drive Business Growth</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                At Forverse.ai, we deliver enterprise-grade AI solutions that solve real business challenges, enhance operations, and create competitive advantage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl transition-all duration-300 hover:from-gray-700 hover:to-gray-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 group border border-gray-700 hover:border-blue-500/30"
                >
                  <service.icon className="h-12 w-12 text-blue-500 mb-6 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110" />
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section with left-to-right scrolling animation */}
        <section className="py-16 bg-gray-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold text-white mb-3">Trusted by Industry Leaders</h2>
              <p className="text-gray-400">We partner with leading organizations across industries</p>
            </div>
            
            {/* Scrolling container */}
            <div className="relative w-full">
              <div 
                
                className="flex overflow-x-scroll scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Double the partners for infinite scroll effect */}
                <div className="flex space-x-6 min-w-max">
                  {[...partners, ...partners].map((partner, index) => (
                    <div 
                      key={index} 
                      className="w-48 h-24 flex-shrink-0 flex items-center justify-center p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                    >
                      <div className="w-full h-12 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded flex items-center justify-center">
                        <span className="text-blue-400 font-semibold">Partner {partner.id}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Fade edges */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We're proud to partner with forward-thinking organizations that are leveraging AI to transform their businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 p-8 rounded-xl transition-all duration-300 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500/30"
                >
                  <svg className="h-8 w-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.691 6.292C5.094 4.771 7.217 4 10.066 4h.644v3.157h-.575c-1.92 0-2.76.779-2.76 2.548v.931h3.335v3.157h-3.335V20H3.691v-6.207H1V10.636h2.691V6.292zm13.141 0c1.403-1.521 3.526-2.292 6.375-2.292h.644v3.157h-.575c-1.92 0-2.76.779-2.76 2.548v.931h3.335v3.157h-3.335V20h-3.684v-6.207h-2.691v-3.157h2.691V6.292z" />
                  </svg>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Are You Ready to Accelerate Your Business?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              At Forverse.ai, we empower businesses with innovative AI solutions to optimize operations, enhance customer experiences, and drive growth. Transform your business and stay ahead in the digital age with our cutting-edge tools and strategies.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 active:translate-y-0 group"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </div>
      <Chatbot />
    </>
  );
};

export default Home;
