import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import Navigation from './Navigation';
import AuthButtons from './AuthButtons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">AI Consultant</span>
          </Link>
          <Navigation />
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;