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
    
    changeGame(game) {
        this.setState({game: game});
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
                    <video
                        autoPlay loop align="middle">
                        <source src={gameList[this.state.game].Preview} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    <div className="title">
                        <h3 className={gameList[this.state.game].name}>
                            {gameList[this.state.game].name}
                        </h3>
                        <button onTouchTap={()=>this.play()}>
                            Play Now
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameMenu;