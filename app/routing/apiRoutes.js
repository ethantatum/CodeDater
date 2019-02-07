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

    app.post('api/friends', function(req, res) {

    });

}