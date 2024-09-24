import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import BarberDashboardPage from './pages/BarberDashboardPage';
import ClientDashboardPage from './pages/ClientDashboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
        <Route path="/dashboard/barber" element={<BarberDashboardPage />} />
        <Route path="/dashboard/client" element={<ClientDashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
