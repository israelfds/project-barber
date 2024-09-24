import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses', error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>{expense.description} - ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
