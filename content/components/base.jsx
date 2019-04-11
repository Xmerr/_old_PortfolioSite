import { Provider } from 'react-redux';
import { createStore } from 'redux';
import socket from 'socket.io-client';
import app from '_redux/reducers';
import Router from './router';

/*********************
 * Redux Setup
*********************/
const store = createStore(app);
/*********************
 * Redux Setup End
*********************/

/*********************
 * Socket.IO
*********************/
global.io = socket();
global.io.on('console', msg => console.log(msg));
/*********************
 * Socket.IO End
*********************/

require('./base.scss');

class Base extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {};
        
        global.toggleMenu = () => {
            this.setState({hideMenu: !this.state.hideMenu});
        };
    }
    
    render() {
        return(
            <Provider store={store}>
                <div className='MainArea'>
                    <Router />
                </div>
            </Provider>
        );
    }
}

export default Base;

ReactDOM.render(
    <Base />,
    document.getElementById('content')
);