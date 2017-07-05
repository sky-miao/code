var express = require('express');
var router = express.Router();
let uuid = require('uuid');
let users = require('../business/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next()
});
router.get('/login', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let t = uuid();
  users.push(t)
  console.log(users)
  res.send(t)
})
module.exports = router;
