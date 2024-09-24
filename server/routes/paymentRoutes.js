const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware(), paymentController.addPayment);
router.get('/', authMiddleware('admin'), paymentController.getPayments);

module.exports = router;
