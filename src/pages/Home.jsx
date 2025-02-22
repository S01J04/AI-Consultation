import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Calendar, Settings, Brain, Shield, Globe, Zap } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div 
        className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl my-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="block">AI-Powered Consultations</span>
          <span className="block text-indigo-600 mt-2">Available 24/7</span>
        </motion.h1>
        <motion.p 
          className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Get instant answers from our AI consultant or schedule a call with a human expert. 
          Start your journey to success today.
        </motion.p>
        <motion.div 
          className="mt-10 flex sm:flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/chat"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Start Chatting
          </Link>
          <Link
            to="/consultant/list"
            className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-lg font-medium rounded-xl text-indigo-600 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all"
          >
            <Users className="w-5 h-5 mr-2" />
            Meet Our Experts
          </Link>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600">
            Experience the future of consultations with our cutting-edge features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Brain className="h-8 w-8" />}
            title="AI-Powered Insights"
            description="Get instant, accurate answers powered by advanced artificial intelligence"
            delay={0.2}
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Expert Network"
            description="Connect with qualified human consultants for deeper insights"
            delay={0.4}
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8" />}
            title="Secure & Private"
            description="Your data is protected with enterprise-grade security"
            delay={0.6}
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8" />}
            title="Global Access"
            description="Available in multiple languages, accessible worldwide"
            delay={0.8}
          />
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        className="py-16 bg-gradient-to-b from-white to-indigo-50 rounded-3xl my-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Startup Founder"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              quote="The AI consultations have been invaluable for my business. Quick, accurate advice whenever I need it."
              delay={0.2}
            />
            <TestimonialCard
              name="Michael Chen"
              role="Marketing Director"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              quote="The combination of AI and human experts is brilliant. Best of both worlds!"
              delay={0.4}
            />
            <TestimonialCard
              name="Emily Davis"
              role="Product Manager"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              quote="24/7 availability and instant responses have transformed how I work."
              delay={0.6}
            />
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="py-16 px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="bg-indigo-600 rounded-3xl py-16 px-8">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust our AI consultation platform for their business needs.
          </p>
          <Link
            to="/payment"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-xl text-lg font-medium hover:bg-indigo-50 transform hover:scale-105 transition-all"
          >
            <Zap className="w-5 h-5 mr-2" />
            Get Started Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-indigo-500 transition-all hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, image, quote, delay }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </motion.div>
  );
};

export default Home;