import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.map(service => (
          <li key={service._id}>{service.name} - ${service.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
