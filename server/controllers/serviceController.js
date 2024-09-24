const Service = require('../models/Service');

// Criar novo serviço
exports.createService = async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();
        res.status(201).json({ service });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar serviço' });
    }
};

// Listar serviços
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar serviços' });
    }
};
