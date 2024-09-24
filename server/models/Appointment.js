// models/Appointment.js

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  barber: { type: mongoose.Schema.Types.ObjectId, ref: 'Barber', required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  date: { type: Date, required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
