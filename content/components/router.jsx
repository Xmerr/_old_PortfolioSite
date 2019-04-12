import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import About from './about/about';
import Header from './header/header';
import Splash from './splash/splash';

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
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper"
                    >
                        <Route path="/about" component={About} />
                        <Route path="/" component={Splash} />
                    </AnimatedSwitch>
                    <Header />
                </Router>
            </div>
        );
    }
}

export default Page;