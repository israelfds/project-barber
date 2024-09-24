import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { format } from 'date-fns';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const [appointmentsResponse, barbersResponse, servicesResponse] = await Promise.all([
          axios.get('/appointments'),
          axios.get('/barbers'),
          axios.get('/services')
        ]);

        setAppointments(appointmentsResponse.data);
        setBarbers(barbersResponse.data);
        setServices(servicesResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setError('Unable to fetch appointments, barbers, or services. Please try again later.');
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const getBarberName = (barberId) => {
    const barber = barbers.find(b => b._id === barberId);
    return barber ? barber.name : 'Unknown Barber';
  };

  const getServiceName = (serviceId) => {
    const service = services.find(s => s._id === serviceId);
    return service ? service.name : 'Unknown Service';
  };

  return (
    <div>
      <h2>Appointments</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {appointments.map(appointment => (
            <li key={appointment._id} className="appointment-item">
              <div className="appointment-date">
                {format(new Date(appointment.date), 'dd/MM/yyyy HH:mm')}
              </div>
              <div className="appointment-details">
                <span className="appointment-label">Barber:</span> {getBarberName(appointment.barber)}
              </div>
              <div className="appointment-details">
                <span className="appointment-label">Service:</span> {getServiceName(appointment.service)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentList;
