import React, { useState } from 'react';
import axios from '../axiosConfig';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/payments', { amount, method });
      alert('Payment recorded');
    } catch (error) {
      console.error('Error recording payment', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        placeholder="Payment Method"
      />
      <button type="submit">Record Payment</button>
    </form>
  );
};

export default PaymentForm;
