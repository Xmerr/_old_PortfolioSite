import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import ReactTooltip from 'react-tooltip';

import MenuItem from './menuItem';
import Options from './menuOptions';

require('./menu.scss');

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }
    
    toggleMenu() {
        this.setState({open: !this.state.open});
    }
    
    render() {
        var row = 0; // ROW CANNOT BE >= 2 - MATH WILL NEED TO BE REEVALUATED IF SO
        
        return (
            <div className="MenuStage">
                <div className="Menu">
                    <MenuItem className="main"
                        onTouchTap={()=>this.toggleMenu()}>
                        <MenuIcon />
                    </MenuItem>
                    
                    {Options.map((option, i) => {
                        // ROW CANNOT BE >= 2 - MATH WILL NEED TO BE REEVALUATED IF SO
                        if(i === 3) {
                            row++;
                        }
                        
                        var style={},
                            deg = (90 / (2 + row)) * (i - 3 * row),
                            x = 4 + (row * 3.5);
                        
                        if(this.state.open) {
                            style.transitionDelay = (i * 0.2) + 's';
                            style.transform = `rotate(${deg}deg) translateX(${x}em) rotate(-${deg}deg)`;
                        }
                        else {
                            style.transitionDelay = ((Options.length - i) * 0.2) + 's';
                        }
                        
                        return (
                            <MenuItem key={i}
                                data={option}
                                open={this.state.open}
                                style={style} />
                        );
                    })}
                </div>
                
                {(()=>{
                    if(this.state.open)
                        return (
                            <ReactTooltip place="bottom" type="light" effect="solid"/>
                        );
                })()}
            </div>
        );
    }
}

export default Menu;