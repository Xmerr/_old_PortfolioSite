import React from 'react';
import ReactDOM from 'react-dom';

require('./base.scss');

var scroll = require('scroll-into-view');

class Base extends React.Component{
    componentDidMount() {
        setTimeout(() => {
            scroll(this.refs.intro, {
               time: 1000
            });
        }, 5000);
    }
    
    render() {
        return(
            <div className='MainArea'>
                <div className="splash">
                    <span className="quote">
                        Why fit in when you're born to stand out?
                        <br />
                        - Dr. Suess
                    </span>
                </div>
                <div ref="intro">
                    <h1>Wiley Hilton</h1>
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