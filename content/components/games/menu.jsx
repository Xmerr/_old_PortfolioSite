import gameList from './games';

require('./menuStyle');
class GameMenu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            game: 0,
            playing: false
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
    
    render() {
        if(this.state.playing) {
            return (
                <div className="Game">
                    {
                        gameList[this.state.game].Component()
                    }
                </div>
            );
        }
        
        return (
            <div className="GameMenu">
                <div>
                    <video autoPlay loop>
                        <source src={gameList[this.state.game].Preview} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    <div className="controls">
                        <div className="leftArrow" onTouchTap={() => this.changeGame()} />
                        
                        <div className="title">
                            <h3 className={gameList[this.state.game].className}>
                                {gameList[this.state.game].name}
                            </h3>
                            <button onTouchTap={()=>this.play()}>
                                Play Now
                            </button>
                        </div>
                        
                        <div className="rightArrow" onTouchTap={() => this.changeGame(true)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default GameMenu;