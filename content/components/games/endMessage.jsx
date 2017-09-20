import SweetAlert from 'sweetalert-react';

class EndMessage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            win: props.win,
            lose: props.lose
        };
    }
    
    componentWillReceiveProps(newProps) {
        if(newProps.win){
            this.setState({win: newProps.win});
        }
        
        if(newProps.lose) {
            this.setState({lose: newProps.lose});
        }
    }
    
    reset() {
        this.setState({
            win: false,
            lose: false
        });
        
        this.props.reset();
    }
    
    render() {
        return (
            <SweetAlert
                show={this.state.win || this.state.lose}
                title={`${this.state.win ? "You Won!" : "You Lost"}`}
                confirmButtonText="Restart"
                onConfirm={() => this.reset()}
            />
        );
    }
}

export default EndMessage;