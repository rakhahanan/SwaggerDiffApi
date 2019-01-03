'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const swaggerDiff = require('swagger-diff');

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
  limit: '50mb'
}));
app.use(bodyParser.json({
  limit: '50mb'
}));

app.post('/diff', (req, res) => {
  if (!req.body || !req.body.old || !req.body.new) {
    return res.sendStatus(400)
  }

  try {
    let oldSpec = req.body.old;
    let newSpec = req.body.new;

    swaggerDiff(oldSpec, newSpec).then(function (diff) {
      res.send(diff);
    });
  } catch (error) {
    res.send(error);
  }

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);