var guessThatNumber = require('./content/components/games/GuessThatNumber/server.js');

module.exports = http => {
    guessThatNumber(http);
};