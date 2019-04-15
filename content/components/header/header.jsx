import { Link } from 'react-router-dom';
import Avatar from '_images/avatar';
require('./header.scss');

class Header extends React.Component {
    render() {
        return (
            <div className='Header'>
                <Link to="/">
                    <Avatar style={{
                        height: "100%"
                    }}/>
                </Link>
                <div />
                <div>
                    <Link to="/about">
                        About Me
                    </Link>
                </div>
                <div>
                    <Link to="/work">
                        Work
                    </Link>
                </div>
                <div>
                    <Link to="/notes">
                        Notes
                    </Link>
                </div>
            </div>
        )
    }
};

export default Header;