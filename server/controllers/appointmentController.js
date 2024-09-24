//appointmentController.js

const Appointment = require('../models/Appointment');

// Criar novo agendamento
exports.createAppointment = async (req, res) => {
    try {
      const { barber, client, date, service } = req.body;
  
      // Verifique se todos os campos necessários foram fornecidos
      if (!barber || !client || !date || !service) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const appointment = new Appointment({
        barber,
        client,
        date,
        service
      });
  
      await appointment.save();
      res.status(201).json({ appointment });
    } catch (error) {
      console.error('Error creating appointment:', error); // Adicione logs para ajudar na depuração
      res.status(500).json({ error: 'Failed to create appointment' });
    }
  };
  
  

// Listar agendamentos
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar agendamentos' });
    }
};
