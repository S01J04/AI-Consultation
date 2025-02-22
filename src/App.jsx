import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import ConsultantProfile from './pages/ConsultantProfile';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/consultant/:id" element={<ConsultantProfile />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;