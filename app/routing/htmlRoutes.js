const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,"./app/public/home.html"));
})

app.get('/survey', (req,res) => {
	res.sendFile(path.join(__dirname,"./app/public/survey.html"));
})