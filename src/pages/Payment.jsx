import React from 'react';
import { Shield, Check } from 'lucide-react';
import { mockPaymentPlans } from '../mockData';

const Payment = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
        <p className="text-lg text-gray-600">Get access to premium features and expert consultations</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {mockPaymentPlans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-600">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600">
          All plans include a 14-day money-back guarantee
        </p>
      </div>
    </div>
  );
};

export default Payment;