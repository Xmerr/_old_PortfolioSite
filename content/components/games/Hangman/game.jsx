import RaisedButton from 'material-ui/RaisedButton';

const alphabet = "abcdefghijklmnopqrstuvwxyz";
require('./style');

class Hangman extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            letters: [],
            word: [],
            mistakes: 0
        };
    }
    
    componentDidMount() {
        global.io.on('win', () => this.win());
        global.io.on('incorrect', () => this.mistake());
        global.io.on('hmInit', data => this.init(data));
        
        global.io.emit('hangman');
        
        window.onresize = () => {
            this.forceUpdate();
            this.sizing();
        };
        this.sizing();
    }
    
    componentWillUnmount() {
        global.io.removeAllListeners('win');
        window.onresize = null;
    }
    
    init(data) {
        this.setState({
            word: data.word
        });
    }
    
    win() {
        alert('you win');
    }
    
    lose() {
        alert('you lose');
    }
    
    sizing() {
        this.canvasWidth = this.refs.canvas.width;
        this.canvasHeight = this.refs.canvas.height;
        
        this.base = {
            xStart: this.canvasWidth / 6,
            yStart: this.canvasHeight - (this.canvasHeight / 4),
            xEnd: this.canvasWidth - (this.canvasWidth / 6)
        };
        
        this.base.yEnd = this.base.yStart;
        this.base.xEnd = this.canvasWidth - this.base.xStart;
        
        this.pole = {
            xStart: (this.base.xStart + this.base.xEnd) / 4,
            yStart: this.base.yStart,
            yEnd: this.canvasHeight / 6
        };
        
        this.pole.xEnd = this.pole.xStart;
        
        this.roof = {
            xStart: this.pole.xEnd,
            yStart: this.pole.yEnd,
            xEnd: this.base.xEnd / 2,
            yEnd: this.pole.yEnd
        };
        
        this.noose = {
            xStart: this.roof.xEnd - (this.roof.xEnd * 0.05),
            yStart: this.roof.yEnd,
        };
        this.noose.xEnd = this.noose.xStart;
        this.noose.yEnd = this.noose.yStart * 1.25;
        
        this.head = {
            radius: this.canvasHeight * 0.03,
            x: this.noose.xEnd
        };
        this.head.y = this.noose.yEnd + this.head.radius;
        
        this.body = {
            xStart: this.head.x,
            yStart: this.head.y + this.head.radius
        };
        this.body.xEnd = this.body.xStart;
        this.body.yEnd = (((this.pole.yStart - this.pole.yEnd) * 0.8) - this.head.radius);
        
        var limbLength = (this.body.yEnd - this.body.yStart) / 2;
        
        this.leftArm = {
            xStart: this.body.xEnd,
            yStart: this.body.yStart + ((this.body.yEnd - this.body.yStart) / 4),
            xEnd: this.body.xEnd - limbLength,
            yEnd: this.body.yEnd
        };
        
        this.rightArm = {
            xStart: this.leftArm.xStart,
            yStart: this.leftArm.yStart,
            xEnd: this.body.xEnd + limbLength,
            yEnd: this.leftArm.yEnd
        };
        
        this.leftLeg = {
            xStart: this.body.xEnd,
            yStart: this.body.yEnd,
            xEnd: this.leftArm.xEnd,
            yEnd: this.body.yEnd + limbLength
        };
        
        this.rightLeg = {
            xStart: this.leftLeg.xStart,
            yStart: this.leftLeg.yStart,
            xEnd: this.rightArm.xEnd,
            yEnd: this.leftLeg.yEnd
        };
        
        
        this.draw();
    }
    
    guessLetter(letter) {
        this.state.letters.push(letter);
        this.setState({
            letters: this.state.letters,
        });
        
        global.io.emit('hmLetterGuess', letter);
    }
    
    mistake() {
        this.setState({
            mistakes: ++this.state.mistakes
        });
        
        this.draw();
    }
    
    draw() {
        var ctx = this.refs.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        
        if(this.state.mistakes === 0)
            return;
        
        ctx.lineWidth = 2;
        ctx.moveTo(this.base.xStart, this.base.yStart);
        ctx.lineTo(this.base.xEnd, this.base.yEnd);
        ctx.stroke();
        
        if(this.state.mistakes === 1)
            return;
            
        ctx.moveTo(this.pole.xStart, this.pole.yStart);
        ctx.lineTo(this.pole.xEnd, this.pole.yEnd);
        ctx.stroke();
        
        if(this.state.mistakes === 2) 
            return;
            
        ctx.moveTo(this.roof.xStart, this.roof.yStart);
        ctx.lineTo(this.roof.xEnd, this.roof.yEnd);
        ctx.stroke();
        
        if(this.state.mistakes === 3) 
            return;
            
        ctx.moveTo(this.noose.xStart, this.noose.yStart);
        ctx.lineTo(this.noose.xEnd, this.noose.yEnd);
        ctx.stroke();
        
        if(this.state.mistakes === 4) 
            return;
        
        ctx.beginPath();
        ctx.arc(this.head.x, this.head.y, this.head.radius, 0, 2*Math.PI);
        ctx.stroke();
        
        if(this.state.mistakes === 5) 
            return;
            
        ctx.moveTo(this.body.xStart, this.body.yStart);
        ctx.lineTo(this.body.xEnd, this.body.yEnd);
        ctx.stroke();
        
        if(this.state.mistakes === 6) 
            return;
            
        ctx.moveTo(this.leftArm.xStart, this.leftArm.yStart);
        ctx.lineTo(this.leftArm.xEnd, this.leftArm.yEnd);
        ctx.stroke();
        
        if(this.state.mistakes === 7) 
            return;
            
        ctx.moveTo(this.rightArm.xStart, this.rightArm.yStart);
        ctx.lineTo(this.rightArm.xEnd, this.rightArm.yEnd);
        ctx.stroke();
        
        if(this.state.mistakes === 8) 
            return;
            
        ctx.moveTo(this.leftLeg.xStart, this.leftLeg.yStart);
        ctx.lineTo(this.leftLeg.xEnd, this.leftLeg.yEnd);
        ctx.stroke();
        
        if(this.state.mistakes === 9) 
            return;
            
        ctx.moveTo(this.rightLeg.xStart, this.rightLeg.yStart);
        ctx.lineTo(this.rightLeg.xEnd, this.rightLeg.yEnd);
        ctx.stroke();
        
        if(this.state.mistakes === 10) 
            this.lose();
    }
    
    render() {
        return (
            <div className="Hangman">
                <div className="ContentArea">
                    <div className="controls">
                        <div className="word">
                            {
                                this.state.word.map((word, i) => {
                                    return(
                                        <span key={i} className={`${word ? "" : "empty"}`}>
                                            {word ? word : ""}
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <div className="keyboard">
                            {(()=>{
                                var letters = [];
                                var handler = letter => {
                                    return () => this.guessLetter(letter);
                                };
                                
                                for(var i in alphabet) {
                                    letters.push(
                                        <RaisedButton label={alphabet[i]}
                                            key={alphabet[i]}
                                            onTouchTap={handler(alphabet[i])}
                                            disabled={this.state.letters.indexOf(alphabet[i]) !== -1} />
                                    );
                                }
                                
                                return letters;
                            })()}
                        </div>
                    </div>
                    <div className="man">
                        <canvas ref="canvas" height={window.innerHeight * 0.7} width={window.innerWidth * 0.4} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Hangman;