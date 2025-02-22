import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Activity, DollarSign, MessageSquare, 
  TrendingUp, UserCheck, AlertTriangle, Settings,
  Calendar, ChevronDown, Search, Filter
} from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from 'recharts';
import CountUp from 'react-countup';

const mockRevenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
];

const mockUserData = [
  { name: 'Free', value: 400 },
  { name: 'Basic', value: 300 },
  { name: 'Premium', value: 200 },
];

const COLORS = ['#6366f1', '#818cf8', '#a5b4fc'];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor and manage your platform's performance</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <StatCard
            title="Total Users"
            value={<CountUp end={15423} duration={2} separator="," />}
            icon={<Users />}
            trend="+12.5%"
            color="indigo"
          />
          <StatCard
            title="Active Sessions"
            value={<CountUp end={247} duration={2} />}
            icon={<Activity />}
            trend="+8.1%"
            color="green"
          />
          <StatCard
            title="Revenue"
            value={<CountUp end={52890} duration={2} prefix="$" separator="," />}
            icon={<DollarSign />}
            trend="+15.3%"
            color="blue"
          />
          <StatCard
            title="AI Consultations"
            value={<CountUp end={8567} duration={2} separator="," />}
            icon={<MessageSquare />}
            trend="+24.7%"
            color="purple"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Charts Section */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Revenue Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Revenue Overview</h2>
                <select className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2">
                  <option>Last 6 months</option>
                  <option>Last year</option>
                  <option>All time</option>
                </select>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockRevenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#6366f1" fill="#818cf8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* User Distribution */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">User Distribution</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={mockUserData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {mockUserData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Side Panel */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Recent Activities */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activities</h2>
              <div className="space-y-4">
                <ActivityItem
                  icon={<UserCheck className="text-green-500" />}
                  title="New Premium Subscription"
                  description="John Doe upgraded to Premium"
                  time="2 minutes ago"
                />
                <ActivityItem
                  icon={<MessageSquare className="text-blue-500" />}
                  title="AI Consultation Completed"
                  description="15 minute session with Sarah"
                  time="5 minutes ago"
                />
                <ActivityItem
                  icon={<AlertTriangle className="text-yellow-500" />}
                  title="System Alert"
                  description="High server load detected"
                  time="10 minutes ago"
                />
              </div>
              <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-700">
                View all activities
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="font-medium">Manage Users</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-indigo-600" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100">
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="font-medium">System Settings</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-indigo-600" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="font-medium">Schedule Reports</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-indigo-600" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, trend, color }) => {
  const colorClasses = {
    indigo: 'bg-indigo-50 text-indigo-600',
    green: 'bg-green-50 text-green-600',
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600'
  };

  return (
    <motion.div 
      className="bg-white p-6 rounded-2xl shadow-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          {icon}
        </div>
        <span className="text-green-500 text-sm font-medium">{trend}</span>
      </div>
      <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </motion.div>
  );
};

const ActivityItem = ({ icon, title, description, time }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-gray-50 rounded-lg">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
};

export default AdminDashboard;