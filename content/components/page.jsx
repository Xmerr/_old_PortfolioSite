import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
                <ReactCSSTransitionGroup transitionName="pageChange"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {this.props.component}
                </ReactCSSTransitionGroup>
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