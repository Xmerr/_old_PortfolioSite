import React from 'react';
import ReactDOM from 'react-dom';

import Splash from './splash';

require('./base.scss');

class Base extends React.Component{
    render() {
        return(
            <div className='MainArea'>
                <Splash />
            </div>
        );
    }
}

export default Base;

ReactDOM.render(
    <Base />,
    document.getElementById('content')
);