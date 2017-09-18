import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Menu from './menu/menu';
import Page from './page';
import app from '../.redux/reducers';

/*********************
 * Redux Setup
*********************/
const store = createStore(app);
/*********************
 * Redux Setup End
*********************/

if (process.env.WEBPACK)
    require('./base.scss');

class App extends React.Component{
    render() {
        return(
            <Provider store={store}>
                <MuiThemeProvider>
                    <div className='MainArea'>
                        <Menu />
                        <Page />
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;