import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold">AI Consultant</span>
            </div>
            <p className="text-gray-600">
              Your AI-powered consultation platform available 24/7
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Features</li>
              <li>Pricing</li>
              <li>Use Cases</li>
              <li>Documentation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Security</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} AI Consultant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;