var express = require('express');
const fs = require('fs');

var router = express.Router();
key1='bfasdf09ffaScsXppfOylL9FPUwrZ3E'
key2='bbsdfbsherg34tgDVERUwrZ3E'
key3='09f00f90f3FWEF34VXq9398L9FPUwrZ3E'

// gg signature token: custom_hook1 - b1TO90YHXppOylL9FPUwrZ3E

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  fs.appendFile('dump.txt', JSON.stringify(req.body, null, 2) + '\n\n*************\n\n', (err) => {
    if (err) throw err;
});
  res.send('ok')
});
secret_key1='FSvereg34346HGdfgerg1gGasvRy434Hh63D'
secret_key2='FSvereg34346bdberg434Hh63D'
module.exports = router;
