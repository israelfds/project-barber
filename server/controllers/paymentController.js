const Payment = require('../models/Payment');

// Adicionar pagamento
exports.addPayment = async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).json({ payment });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar pagamento' });
    }
};

// Listar pagamentos
exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pagamentos' });
    }
};
