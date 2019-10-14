var fs = require('fs');
var path = require('path');
var express = require('express');

var router = express.Router();
var indexJs = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== indexJs) && (file.slice(-9) === '.route.js');
  })
  .forEach(function(routeFile) {
    router.use(`/${routeFile.split('.')[0]}`, require(`./${routeFile}`));
  });

module.exports = router;
