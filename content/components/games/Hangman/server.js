var words = require('./words');

module.exports = socket => {
    socket.on('hangman', () => {
        var number = Math.floor(Math.random() * words.length - 1);
        var word = socket.clientData[socket.handshake.issued].word = words[number];
        var wordCode = socket.clientData[socket.handshake.issued].wordCode = new Array(word.length);
        console.log(`the word is: ${word}`);
        
        socket.emit('hmInit', {
            word: wordCode
        });
    });
    
    socket.on('hmLetterGuess', letter => {
        var wordCode = socket.clientData[socket.handshake.issued].wordCode;
        var word = socket.clientData[socket.handshake.issued].word;
        
        var start = 0;
        while(true) {
            var index = word.indexOf(letter, start);
            
            if(index === -1) {
                if(start === 0) {
                    socket.emit('incorrect');
                    return;
                }
                break;
            }
            
            wordCode[index] = letter;
            
            start = index + 1;
        }
        
        socket.emit('hmInit', {
           word: wordCode 
        });
        
        for(var i = wordCode.length - 1; i >= 0; i--) {
            if(wordCode[i] === undefined) 
            return;
        }
        
        socket.emit('win');
    });
};