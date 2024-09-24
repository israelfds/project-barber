import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('/payments');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments', error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div>
      <h2>Payments</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment._id}>{payment.amount} - {payment.method}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
