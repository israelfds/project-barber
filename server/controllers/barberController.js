const User = require('../models/User');

// Listar barbeiros
exports.getBarbers = async (req, res) => {
    try {
        const barbers = await User.find({ role: 'barbeiro' }); // Buscar usuários com role 'barbeiro'
        res.json(barbers);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar barbeiros' });
    }
};

// Criar barbeiro
exports.createBarber = async (req, res) => {
    try {
        const barberData = { ...req.body, role: 'barbeiro' }; // Definir o role como 'barbeiro'
        const barber = new User(barberData);
        await barber.save();
        res.status(201).json({ barber });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar barbeiro' });
    }
};
