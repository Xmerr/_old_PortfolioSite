var guessThatNumber = require('./content/components/games/GuessThatNumber/server.js');
var hangman = require('./content/components/games/Hangman/server.js');

module.exports = http => {
    guessThatNumber(http);
    hangman(http);
};