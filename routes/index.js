var express = require('express');
const fs = require('fs');

var router = express.Router();
'bfasdf09ffaScsXppfOylL9FPUwrZ3E'
'bbsdfbsherg34tgDVERUwrZ3E'
'09f00f90f3FWEF34VXq9398L9FPUwrZ3E'
'09f00f90wefwfwefFPUwrZ3E'
'09f00f90bytjhth3453HEgergwefwfwefFPUwrZ3E'
// gg signature token: custom_hook1 - b1TO90YHXppOylL9FPUwrZ3E

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  fs.appendFile('dump.txt', JSON.stringify(req.body, null, 2) + '\n\n*************\n\n', (err) => {
    if (err) throw err;
});
  res.send('ok')
});

module.exports = router;
