import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Menu from './menu/menu';
import Page from './page';
import app from '_redux/reducers';

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
import socket from 'socket.io-client';
global.io = socket();
/*********************
 * Socket.IO End
*********************/

/*********************
 * Sweet Alert
*********************/
require('sweetalert/dist/sweetalert.css');
/*********************
 * Sweet Alert
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
                <MuiThemeProvider>
                    <div className='MainArea'>
                        {(()=>{
                            if(!this.state.hideMenu) {
                                return (
                                    <Menu />
                                );
                            }
                        })()}
                        <Page />
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default Base;

ReactDOM.render(
    <Base />,
    document.getElementById('content')
);