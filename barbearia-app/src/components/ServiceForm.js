import React, { useState } from 'react';
import axios from '../axiosConfig';

const ServiceForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/services', { name, price });
      alert('Service added');
    } catch (error) {
      console.error('Error adding service', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Service Name"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default ServiceForm;
