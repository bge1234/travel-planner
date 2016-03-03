var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

router.get('/', function(req, res, next) {
  knex('destinations').select().orderBy('id').then(function(results) {
    res.json(results);
  });
});

module.exports = router;
