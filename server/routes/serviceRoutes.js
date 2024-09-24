const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware('admin'), serviceController.createService);
router.get('/', authMiddleware(), serviceController.getServices);

module.exports = router;
