import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, CreditCard, LayoutDashboard, Settings } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/chat', label: 'Chat', icon: MessageSquare },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/payment', label: 'Upgrade', icon: CreditCard },
    { path: '/settings', label: 'Settings', icon: Settings },
    { path: '/admin', label: 'Admin Dashboard', icon: 's' },
  ];
 
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map(({ path, label, icon: Icon }) => (
        <Link
          key={path}
          to={path}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            location.pathname === path
              ? 'text-indigo-600 bg-indigo-50'
              : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
          }`}
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;