import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import PaymentList from '../components/PaymentList';
import AppointmentList from '../components/AppointmentList';

const ClientDashboardPage = () => {
  return (
    <div>
      <h1>Client Dashboard</h1>
      <AppointmentForm />
      <AppointmentList />
    </div>
  );
};

export default ClientDashboardPage;
