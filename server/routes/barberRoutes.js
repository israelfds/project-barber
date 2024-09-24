const express = require('express');
const router = express.Router();
const barberController = require('../controllers/barberController');
const authMiddleware = require('../middlewares/authMiddleware');

// Permite GET para todos
router.get('/', authMiddleware(), barberController.getBarbers); 

// Permite POST para administradores e barbeiros
router.post('/', authMiddleware(['admin', 'barbeiro']), barberController.createBarber);

module.exports = router;
