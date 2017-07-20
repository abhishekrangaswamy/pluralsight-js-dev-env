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

app.listen(port,function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
