const friends = require('../data/friends.js');


module.exports = (app) => {
	app.get('/api/friends', (req, res) => {
		res.json(friends);
	})
}