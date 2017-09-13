import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Menu from './menu/menu';
import Splash from './splash/splash';
import Page from './page';
import app from '_redux/reducers';

/*********************
 * Redux Setup
*********************/
const store = createStore(app);
/*********************
 * Redux Setup End
*********************/

require('./base.scss');

class Base extends React.Component{
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

export default Base;

ReactDOM.render(
    <Base />,
    document.getElementById('content')
);