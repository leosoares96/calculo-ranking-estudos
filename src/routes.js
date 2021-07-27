const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});



const UserDetail = require('./app/users_details/');

router.use('/api', UserDetail)

router.get('/', function (req, res) {
  res.json({ 'created by': 'Leonardo Soares' });
});

module.exports = router;
