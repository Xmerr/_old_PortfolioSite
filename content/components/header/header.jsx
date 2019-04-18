import { NavLink } from 'react-router-dom';
import Avatar from '_images/avatar';
require('./header.scss');

class Header extends React.Component {
    render() {
        return (
            <div className='Header'>
                <NavLink to="/">
                    <Avatar style={{
                        height: "100%"
                    }}/>
                </NavLink>
                <div />
                <div>
                    <NavLink to="/about">
                        About Me
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/work">
                        Projects
                    </NavLink>
                </div>
            </div>
        )
    }
};

export default Header;