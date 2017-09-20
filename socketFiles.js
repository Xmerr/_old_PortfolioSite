var guessThatNumber = require('./content/components/games/GuessThatNumber/server.js');
var hangman = require('./content/components/games/Hangman/server.js');
var ticTacToe = require('./content/components/games/TicTacToe/server.js');

module.exports = http => {
    guessThatNumber(http);
    hangman(http);
    ticTacToe(http);
};