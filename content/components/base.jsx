import React from 'react';
import ReactDOM from 'react-dom';

var splash = require('../images/splash.webp');

require('./base.scss');

class Base extends React.Component{
    render() {
        return(
            <div className='MainArea'>
                <div className="splash">
                    <img src={splash} draggable='false' />
                    <span className="quote">
                        “Why fit in when you're born to stand out?”
                        <br />
                        - Dr. Suess
                    </span>
                </div>
            </div>
        );
    }
}

export default Base;

ReactDOM.render(
    <Base />,
    document.getElementById('content')
);