import Land from '_images/land';
require('./splash.scss');

// Based on http://seanhalpin.io/

class Splash extends React.Component{
    render() {
        return (
            <div className="Splash">
                <div>
                    <h1 className="title">
                        I'm Wiley,
                    </h1>
                    <h2 className="subtitle">
                        a front end web developer
                    </h2>
                </div>
                <div className="earth">
                    <Land />
                </div>
            </div>
        );
    }
}

export default Splash;