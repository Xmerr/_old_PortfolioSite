import { connect } from 'react-redux';
import Avatar from '_images/avatar';
require('./header.scss');

class Header extends React.Component {
    render() {
        return (
            <div className='Header'>
                <div className="me">
                    <Avatar style={{
                        height: "100%"
                    }}/>
                </div>
                <div />
                <div>
                    Link 1
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

Header.propTypes={
};

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);