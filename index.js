// init project
var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = module.exports = express();
const useragent = require('express-useragent');
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

//if no path go to home page
app.get('/',(req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//if path is set to api then...
const api = "/whoami";
app.get(api, (req,res) => {
  let ipaddress = req.ip;
  let language = req.acceptsLanguages();
  let software = `OS: ${req.useragent.os}, Browser: ${req.useragent.browser}`;

  //returns data as a json object
  res.json({ ipaddress, language: language[0], software});
});

// listen for requests :)
var listener = app.listen(3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
