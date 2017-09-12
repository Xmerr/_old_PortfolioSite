import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Menu from './menu/menu';
import Splash from './splash/splash';

require('./base.scss');

class Base extends React.Component{
    render() {
        return(
            <MuiThemeProvider>
                <div className='MainArea'>
                    <Menu />
                    <Splash />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Base;

ReactDOM.render(
    <Base />,
    document.getElementById('content')
);