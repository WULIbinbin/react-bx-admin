var express = require('express');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../dist')));

app.listen('8066', function () {
  console.log('端口监听中，http://localhost:8066/')
})
