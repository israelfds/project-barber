import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const BarberList = () => {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        const response = await axios.get('/barbers');
        setBarbers(response.data);
      } catch (error) {
        console.error('Error fetching barbers', error);
      }
    };

    fetchBarbers();
  }, []);

  return (
    <div>
      <h2>Barbers</h2>
      <ul>
        {barbers.map(barber => (
          <li key={barber._id}>{barber.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BarberList;
