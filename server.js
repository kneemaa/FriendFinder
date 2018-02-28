const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;

const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');
const friends = require('./app/data/friends');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
})