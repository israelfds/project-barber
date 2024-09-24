import React from 'react';
import AppointmentList from '../components/AppointmentList';
import PaymentList from '../components/PaymentList';

const BarberDashboardPage = () => {
  return (
    <div>
      <h1>Barber Dashboard</h1>
      <AppointmentList />
      <PaymentList />
    </div>
  );
};

export default BarberDashboardPage;
