import React from 'react';
import BarberList from '../components/BarberList';
import AppointmentList from '../components/AppointmentList';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';
import PaymentList from '../components/PaymentList';
import PaymentForm from '../components/PaymentForm';
import ServiceList from '../components/ServiceList';

const AdminDashboardPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <BarberList />
      <AppointmentList />
      <ExpenseForm />
      <ExpenseList />
      <PaymentForm />
      <PaymentList />
      <ServiceList />
    </div>
  );
};

export default AdminDashboardPage;
