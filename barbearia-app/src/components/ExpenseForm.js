import React, { useState } from 'react';
import axios from '../axiosConfig';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/expenses', { description, amount });
      alert('Expense added');
    } catch (error) {
      console.error('Error adding expense', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
