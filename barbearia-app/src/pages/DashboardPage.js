import React from 'react';
import BarberList from '../components/BarberList';
import AppointmentList from '../components/AppointmentList';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <BarberList />
      <AppointmentList />
    </div>
  );
};

export default DashboardPage;
