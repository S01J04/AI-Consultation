import React from 'react';
import { Calendar } from 'react-calendar';
import { useSelector } from 'react-redux';
import { Clock, Calendar as CalendarIcon, CreditCard, MessageSquare } from 'lucide-react';
import { mockSessions } from '../mockData';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const user = useSelector(state => state.user.currentUser);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
        <p className="text-gray-600">Manage your consultations and account settings</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Upcoming Sessions */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            Upcoming Sessions
          </h2>
          <div className="space-y-4">
            {mockSessions
              .filter(session => session.status === 'scheduled')
              .map(session => (
                <div key={session.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-medium">{session.type === 'ai' ? 'AI Consultation' : 'Expert Call'}</div>
                  <div className="text-sm text-gray-600">
                    {new Date(session.startTime).toLocaleString()}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-indigo-600" />
            Calendar
          </h2>
          <Calendar className="w-full" />
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-indigo-600" />
            Recent Activity
          </h2>
          <div className="space-y-4">
            {mockSessions
              .filter(session => session.status === 'completed')
              .map(session => (
                <div key={session.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-medium">{session.type === 'ai' ? 'AI Chat' : 'Expert Consultation'}</div>
                  <div className="text-sm text-gray-600">
                    {new Date(session.startTime).toLocaleDateString()}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Subscription Status */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-indigo-600" />
            Subscription
          </h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="font-medium capitalize">{user.subscriptionType} Plan</div>
            <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;