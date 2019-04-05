import Avatar from '../../images/avatar';
import Land from '../../images/land';
require('./splash.scss');

// Based on http://seanhalpin.io/

class Splash extends React.Component{
    render() {
        return (
            <div className="Splash">
                <div>
                    <h1 className="title">
                        I'm Wiley
                    </h1>
                    <h2 className="subtitle">
                        a web developer and react specialist
                    </h2>
                </div>
                <Avatar style={{
                    width: "500px",
                    height: "500px"
                }}/>
                <div className="earth">
                    <Land />
                </div>
            </div>
        );
    }
}

export default Splash;