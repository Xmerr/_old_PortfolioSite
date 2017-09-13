import {connect} from 'react-redux';
import { changeComponent } from '_redux/actions';

class MenuItem extends React.Component {
    clicked() {
        if(this.props.onTouchTap) {
            this.props.onTouchTap();
        }
        
        if(this.props.data && this.props.data.path){
            window.open(this.props.data.path);
        }
        
        else if (this.props.data && this.props.data.component) {
            this.props.changeComponent(this.props.data.component);
        }
    }
    
    render () {
        return (
            <div className={`MenuItem ${this.props.className ? this.props.className: ""} ${this.props.data ? this.props.data.path ? "external" : "internal" : ""}`}
                style={this.props.style}
                data-tip={this.props.data? this.props.data.name : ""}
                onTouchTap={() => this.clicked()}>
                {(()=>{
                    if(this.props.children) {
                        return this.props.children;
                    }
                    else if (this.props.data && this.props.data.icon)
                        return this.props.data.icon;
                })()}
            </div>
        );
    }
}

const stateTo = state => {
    return {
    };
};

const dispatchTo = dispatch => {
    return {
        changeComponent: comp => dispatch(changeComponent(comp))
    };
};

export default connect(stateTo, dispatchTo)(MenuItem);