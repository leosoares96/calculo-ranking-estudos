const express = require('express');
const controller = require('./controller');

const router = express.Router();

// Definindo as rotas
router.get('/', controller.calcRanking);

module.exports = router;
