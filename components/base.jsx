import React from 'react';
import ReactDOM from 'react-dom';

class Base extends React.Component{
    render(){
        return(
            <div>
                Hello World
            </div>
        );
    }
}

export default Base;

ReactDOM.render(
    <Base />,
    document.getElementById('content')
);