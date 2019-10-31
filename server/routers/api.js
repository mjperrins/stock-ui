var express = require('express');
var proxy = require("express-http-proxy");

var apiHost = process.env.API_HOST || 'localhost:3001';

module.exports = function(app){
  app.use('/api', proxy(apiHost));
};
