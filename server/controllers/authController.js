// authController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwtConfig = require('../config/jwt.config');

// Registrar novo usuário
exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar o usuário' });
    }
};

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
        res.json({ 
            token,
            clientId: user._id // Adiciona o clientId à resposta
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};

// Buscar roles baseado no clientId
exports.getRoleByEmail = async (req, res) => {
    const { email } = req.params; // Obtém o email dos parâmetros da requisição

    try {
        // Busca o usuário pelo email
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Retorna a role do usuário encontrado
        res.json({ role: user.role });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar a role do usuário' });
    }
};
