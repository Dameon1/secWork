const express = require('express');
const helmet = require('helmet');
const app = express();
const hidePoweredBy = helmet.hidePoweredBy(); 
const frameGuard = helmet.frameGuard({action: 'deny'})
app.use(hidePoweredBy, frameGuard);








console.log('somethin');











































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
