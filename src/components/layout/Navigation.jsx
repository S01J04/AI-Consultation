import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageSquare, CreditCard, LayoutDashboard,Settings, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { path: "/chat", label: "Chat", icon: MessageSquare },
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/payment", label: "Upgrade", icon: CreditCard },
  { path: "/settings", label: "Settings", icon: Settings },
  { path: "/admin", label: "Admin Dashboard", icon: Settings },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
              location.pathname === path
                ? "text-indigo-600 bg-indigo-50"
                : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden block p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full w-64 bg-white z-[1000] shadow-lg p-6 md:hidden"
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-lg focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <nav className="mt-8 space-y-4">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  location.pathname === path
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
