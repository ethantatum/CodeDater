// Dependencies

const path = require('path');

// Routing
// Directs users to different pages based on what the URI is

module.exports = function(app) {

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../../public/survey.html'));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, `../../public/home.html`));
    });

};