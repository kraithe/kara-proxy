const express = require('express');

const proxy = require('express-http-proxy');
const path = require('path');

const proxyPort = 3876;
const charityPort = 3987;
const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

app.use(express.urlencoded({ extended: true }));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.listen(proxyPort, () => {
  console.log(`Charity proxy server listening on ${proxyPort}`);
});

module.exports = app;
