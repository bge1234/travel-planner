var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    t: 'Express',
    i: 'Express',
    t2: 'Express',
    l: 'Express',
    e: 'Express'
  });
});

module.exports = router;
