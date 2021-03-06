import express from 'express';   //ES6 Feature
var path = require('path');      //ES5 feature
var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

/*eslint-disable no-console*/
var port = 3000;        //ES5 feature
const app = express();  //ES6 feature
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port,function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
