var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('dist'));
 
app.get('/index', function (req, res) {
   res.sendFile( __dirname + "/dist/" + "index.html" );
})
app.post('/getjson', urlencodedParser, function (req, res) {
   response = {
   	   times:req.body.times,
       name:'node获取数据',
       message:'有啥问题可以直接和我联系哦电话13777841102'
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
app.get('*', function (req, res) {
   res.sendFile( __dirname + "/dist/" + "index.html" );
})  
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})