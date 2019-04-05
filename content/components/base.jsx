import { Provider } from 'react-redux';
import { createStore } from 'redux';
/*********************
 * Redux Setup End
*********************/
/*********************
 * Socket.IO
*********************/
import socket from 'socket.io-client';
import app from '_redux/reducers';
import Page from './page';

/*********************
 * Redux Setup
*********************/
const store = createStore(app);
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
                    <Page />
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