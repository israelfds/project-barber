import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const AppointmentForm = () => {
  const [barberId, setBarberId] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [date, setDate] = useState('');
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch barbers and services on component mount
    const fetchData = async () => {
      try {
        const barbersResponse = await axios.get('/barbers');
        setBarbers(barbersResponse.data);
        const servicesResponse = await axios.get('/services');
        setServices(servicesResponse.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!barberId || !serviceId || !date) {
      setError('Please fill in all fields.');
      return;
    }

    // Get the client ID from sessionStorage
    const clientId = sessionStorage.getItem('clientId');

    if (!clientId) {
      setError('Client ID not found in session.');
      return;
    }

    try {
      await axios.post('/appointments', { barber: barberId, client: clientId, service: serviceId, date });
      alert('Appointment booked');
      // Clear form after successful submission
      setBarberId('');
      setServiceId('');
      setDate('');
      setError('');
    } catch (error) {
      setError('Failed to book appointment. Please try again.');
      console.error('Error booking appointment', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <label htmlFor="barber">Choose a Barber:</label>
            <select
              id="barber"
              value={barberId}
              onChange={(e) => setBarberId(e.target.value)}
            >
              <option value="">Select a barber</option>
              {barbers.map((barber) => (
                <option key={barber._id} value={barber._id}>
                  {barber.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="service">Choose a Service:</label>
            <select
              id="service"
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service._id} value={service._id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date">Choose a Date and Time:</label>
            <input
              type="datetime-local"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button type="submit">Book Appointment</button>
        </>
      )}
    </form>
  );
};

export default AppointmentForm;
