import Land from '../../images/land';
import data from '../data';
require('./splash.scss');

// Based on http://seanhalpin.io/

class Splash extends React.Component{
    colorName() {
        var changeColor = index => {
            // Find the indexed object in the title set and transition it
            this.refs[`titleLetter${index}`].className += " transitioned";
            if(data.title.length > index + 1)
                window.setTimeout(() => changeColor(index+1), 75);

            // If all title objects have been transitioned then transition the subtitle
            else 
                this.refs.subtitle.className += " transitioned";
        };
        
        // Change the color of the first element in the group
        changeColor(0);
    }
    
    componentDidMount() {
        // After a set amount of time start changing the colors of the title
        window.setTimeout(() => this.colorName(), 500);
    }
    
    render() {
        var title = "I'm Wiley"

        return (
            <div className="Splash">
                <div>
                    <h1 className="title">
                        {(()=>{
                            // Title has to be formatted as seporate spans to create the color change effect
                            var formattedTitle = [];
                            for(var i in data.title) {
                                formattedTitle.push(
                                    <span key={i} ref={`titleLetter${i}`}>
                                        {title[i]}
                                    </span>
                                );
                            }
                            
                            return formattedTitle;
                        })()}
                    </h1>
                    <h2 className="subtitle"
                        ref="subtitle">
                        a web developer and react specialist
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