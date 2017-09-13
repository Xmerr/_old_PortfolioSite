var Avatar = require('../../images/avatar');
require('./aboutStyle');

class AboutMe extends React.Component{
    render() {
        return(
            <div className="AboutMe">
                <div>
                    <h1>
                        Wiley Hilton
                    </h1>
                    <h2>
                        Website Developer - Yrs 5
                    </h2>
                </div>
                <div>
                    <div className="Avatar" style={{
                        backgroundImage: `url(${Avatar})`
                    }} />
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default AboutMe;