import EndMessage from '../endMessage';

require('./style');

class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    componentDidMount() {
        global.io.on('win', () => this.win());
        global.io.on('lose', () => this.lose());
        global.io.on('end', result => this.end(result));
        
        global.io.emit('ticktactoe');
    }
    
    componentWillUnmount() {
        global.io.removeAllListeners('win');
    }
    
    end(result) {
        if(result === "win"){
            this.setState({win: true});
            return;
        }
        
        this.setState({lose: true});
    }
    
    render() {
        return (
            <div className="TickTacToe">
                <EndMessage
                    win={this.state.win}
                    lose={this.state.lose}
                    reset={this.props.reset}
                />
                
                <div className="ContentArea">
                    TicTacToe
                </div>
            </div>
        );
    }
}

export default TicTacToe;