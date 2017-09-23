import FloatingActionButton from 'material-ui/FloatingActionButton';
import LeftArrow from 'material-ui/svg-icons/navigation/arrow-back';
import RightArrow from 'material-ui/svg-icons/navigation/arrow-forward';

import gameList from './games';
require('./menuStyle');

class GameMenu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            game: 0,
            playing: false,
            key: 0
        };
    }
    
    changeGame(next) {
        var newGame = next ? ++this.state.game : --this.state.game;
        
        if(newGame === gameList.length)
            newGame = 0;
            
        else if(newGame === -1)
            newGame = gameList.length - 1;
            
        this.setState({game: newGame});
    }
    
    play() {
        this.setState({playing: true});
    }
    
    stopPlaying() {
        this.setState({playing: false});
    }
    
    resetGame() {
        this.setState({key: ++this.state.key});
    }
    
    render() {
        if(this.state.playing) {
            return (
                <div className="Game">
                    <FloatingActionButton className="backButton" onTouchTap={() => this.stopPlaying()}>
                        <LeftArrow />
                    </FloatingActionButton>
                    {
                        gameList[this.state.game].Component({key: this.state.key, reset: () => this.resetGame()})
                    }
                </div>
            );
        }
        
        return (
            <div className="GameMenu">
                <div>
                    <video autoPlay loop key={this.state.game}>
                        <source src={gameList[this.state.game].Preview}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    
                    <div className="controls">
                        <div className="leftArrow arrow" onTouchTap={() => this.changeGame()}>
                            <LeftArrow />
                        </div>
                        
                        <div className="title">
                            <h3 className={gameList[this.state.game].className}>
                                {gameList[this.state.game].name}
                            </h3>
                            <button onTouchTap={() => this.play()}>
                                Play Now
                            </button>
                        </div>
                        
                        <div className="rightArrow arrow" onTouchTap={() => this.changeGame(true)}>
                            <RightArrow />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameMenu;