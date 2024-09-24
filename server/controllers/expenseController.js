const Expense = require('../models/Expense');

// Adicionar despesa
exports.addExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json({ expense });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar despesa' });
    }
};

// Listar despesas
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar despesas' });
    }
};
