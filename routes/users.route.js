var express = require('express');
var get = require('../controllers/user.controller');

var router = express.Router()

router.route('/')
  .get(get);

module.exports = router;