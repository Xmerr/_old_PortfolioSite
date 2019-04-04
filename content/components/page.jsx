import { connect } from 'react-redux';

class Page extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    componentWillReceiveProps(newProps) {
        if(this.props.component !== newProps.component) {
            this.setState({oldComp: this.props.component});
        }
    }
    
    render(){
        return(
            <div className="Page">
                {this.props.component}
            </div>
        );
    }
}

const stateTo = state => {
    return {
        component: state.component
    };
};
const dispatchTo = dispatch => {
    return {
    };
};

export default connect(stateTo, dispatchTo)(Page);