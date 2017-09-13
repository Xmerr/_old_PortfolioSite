require('./gameStyle');

class GameScreen extends React.Component{
    componentDidMount() {
        this.canvas = this.refs.canvas;
        
        window.onresize = () => {
            this.forceUpdate();
            
            if(this.props.reset)
                this.props.reset();
        };
    }
    
    render() {
        return(
            <div className="GameScreen">
                <canvas ref="canvas" height={window.innerHeight * 0.7} width={window.innerWidth * 0.7} />
            </div>
        );
    }
}

export default GameScreen;