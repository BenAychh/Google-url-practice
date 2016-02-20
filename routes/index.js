var express = require('express');
var request = require('request');
var helper = require('./shorturlhelper.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', { title: 'Express' });
});

router.post('/geturl', function(userRequest, myResponse, next) {
  request.post(
    { headers: {'content-type': 'application/json'},
      uri: 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyCFmyDgaO2N2hLSbF1bjs-F4dg2CxuipNw',
      json: {"longUrl": userRequest.body.longurl}
    },
    function(error, googleResponse, googleBody) {
      if(error) {
        console.log("error: ", error);
      } else if (googleResponse.statusCode == 200) {
        console.log(googleBody.id);
        myResponse.render('shorturl', helper(googleBody.id));
      }
    });
});
module.exports = router;
