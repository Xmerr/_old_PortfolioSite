import { connect } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './header/header';

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
            <div className="Router">
                <Router>
                    {this.props.component}
                </Router>
                <Header />
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