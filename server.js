const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;
const exphbs = require('express-handlebars');

const apiRoutes = require('./app/routing/apiRoutes');
const friends = require('./app/data/friends');

//const values = [1,2,3,4,5,6,7,8,9,10,];

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use(express.static(path.join(__dirname,'./app/public')));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
})