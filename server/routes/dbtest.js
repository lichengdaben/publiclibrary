var express = require('express');
var router = express.Router();
var db = require('../db');
router.get('/', function (req, res, next) {
    db.sql('select brand_id from production.brands',function(err,result){
        if (err) {
          console.log(err);
          return;
        }
        console.log('用户总数为1:',result.recordsets);
      })
    res.send('DBtest')
   }); 

  
module.exports = router;




