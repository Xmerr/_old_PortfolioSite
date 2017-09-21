class StartTimer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 3
        };
    }
    
    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount() {
        
    }
    
    tick() {
        this.setState({time: --this.state.time});
        if(this.state.time <= 0) {
            clearInterval(this.timer);
            this.props.end();
        }
    }
    
    render() {
        return (
            <div className="StartTimer">
                <div className="timer">
                    {this.state.time}
                </div>
            </div>
        );
    }
}

export default StartTimer;