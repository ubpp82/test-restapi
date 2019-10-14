var fs = require('fs');
var path = require('path');
var express = require('express');
var index = require('../controllers/index.controller');

var router = express.Router();
var indexJs = path.basename(__filename);

fs.readdirSync(__dirname).filter(function(file) {
  file.indexOf('.' !== 0) && (file !== indexJs) && (file.slice(-9))
}).forEach(function(routeFile) {
  router.use(`/${routeFile.split('.')[0]}`, require(`./${routeFile}`).default)
})

module.exports = router;
