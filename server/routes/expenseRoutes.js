const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware('admin'), expenseController.addExpense);
router.get('/', authMiddleware('admin'), expenseController.getExpenses);

module.exports = router;
