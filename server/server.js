var express = require('express');
var app = express();
var validator = require('html-validator')
var html5Lint = require( 'html5-lint' );


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 

// app.use(function(res, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

// });

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/checkHtml', function(req, res) {
  const html = req.body.html;
  // const opts = {
  //   data: html,
  //   format: 'text',
  // };

  // console.log("opts", opts);
 
  // validator(opts, function (error, data) {
  //   if (error) {
  //     throw error
  //   }
 
  //   console.log(data);
  //   res.json(data);
  // });

  html5Lint( html, function( err, results ) {
    res.json(results.messages);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});