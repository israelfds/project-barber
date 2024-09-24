const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

module.exports = (role = 'user') => {
    return (req, res, next) => {
        // Middleware para verificar o token e a role do usuário
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return res.status(401).json({ error: 'Token não fornecido' });

        jwt.verify(token, jwtConfig.secret, (err, decoded) => {
            if (err) return res.status(403).json({ error: 'Token inválido' });

            req.user = decoded;
            if (role !== 'user' && req.user.role !== role) {
                return res.status(403).json({ error: 'Acesso negado' });
            }
            next();
        });
    };
};
