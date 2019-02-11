// Load Data
// Links to our friends.js file to grab profile array

const friendsData = require('../data/friends');

// Routing

module.exports = function(app) {
    // API 'Get' request
    // Displays full profilesArray when user visits api/friends link

    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    });

    // API 'Post' request
    // When user submits answer data, it is compared to the profilesArray to determine a match

    app.post('/api/friends', function(req, res) {
        let userRes = req.body;
        let userScores = userRes.scores;
        let matchName = '';
        let matchPic = '';
        let initialVal = 10000;
        // We need to loop over all the objects in friendsData and compare each score 1 at a time to our userScores
        for(let i = 0; i < friendsData.length; i++) {
            let difference = 0;
            for(let j = 0; j < userScores.length; j++) {
                difference += Math.abs((friendsData[i].scores[j]) - (userScores[j]));
            }
            if(difference < initialVal) {
                matchName = friendsData[i].name
                console.log(matchName);
                matchPic = friendsData[i].photo
                console.log(matchPic);
            }
            
        }

    });

}