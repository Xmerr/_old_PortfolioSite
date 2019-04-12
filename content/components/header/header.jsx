import { Link } from 'react-router-dom';
import Avatar from '_images/avatar';
require('./header.scss');

class Header extends React.Component {
    render() {
        return (
            <div className='Header'>
                <div className="me">
                    <Link to="/">
                        <Avatar style={{
                            height: "100%"
                        }}/>
                    </Link>
                </div>
                <div />
                <div>
                    <Link to="/about">
                        About Me
                    </Link>
                </div>
                <div>
                    Link 2
                </div>
                <div>
                    Link 3
                </div>
            </div>
        )
    }
};

export default Header;