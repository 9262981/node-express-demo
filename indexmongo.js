var express = require('express');
var mysql  = require('mysql');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.get('/', function (req, res) {

  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("test");
      dbo.collection("runoob"). find({}).toArray(function(err, result) { // 返回集合中所有数据
          if (err) throw err;
          res.send(result);
          console.log(result);
          db.close();

      });
  });
})

// sql

// app.get('/', function (req, res) {
//
//   var connection = mysql.createConnection({
//    host     : '176.122.140.47',
//    user     : 'ppap',
//    password : 'ppapppap',
//    port: '3306',
//    database: 'ppap',
//   });
//
//   connection.connect();
//
//   var  sql = 'SELECT * FROM todo';
//   //查
//   connection.query(sql,function (err, result) {
//          if(err){
//            console.log('[SELECT ERROR] - ',err.message);
//            return;
//          }
//         res.send(result);
//
//         console.log('--------------------------SELECT----------------------------');
//         console.log(result);
//         console.log('------------------------------------------------------------\n\n');
//   });
//   connection.end();
// })

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
