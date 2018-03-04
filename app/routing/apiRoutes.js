let friends = require('../data/friends.js');
const values = [1,2,3,4,5,6,7,8,9,10,];

module.exports = (app) => {
	app.get('/api/friends', (req, res) => {
		res.json(friends);
	})

	app.get('/', (req,res) => {
		res.render("survey", { options: values});
	})

	app.post('/api/friends', (req,res) => {
		let currentScore;
		let bestMatch = "";
		let surveyData = req.body.scores;
		
		const total = (accumulator, currentValue) => accumulator + currentValue;
		surveyData = surveyData.map(val => Number(val));
		let surveyTotal = surveyData.reduce(total);
		let surveyUser = {
			name: req.body.name,
			photo: req.body.photo,
			scores: surveyData
		};

		friends.forEach(friend => {
			let difference = 0;
			let scores = friend.scores;

			let scoreTotal = scores.reduce(total);

			difference = difference + Math.abs(scoreTotal - surveyTotal);

			const update = () => {
					currentScore = difference;
					bestMatch = friend;
				};

			!currentScore ? update() : (difference < currentScore) ? update() : null;

			});
		
		friends.push(surveyUser);
		res.json(bestMatch);
	})
}
