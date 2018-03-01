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

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
})