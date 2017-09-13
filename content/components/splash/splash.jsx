require('./splash.scss');

const title = "Wiley Hilton",
    subtitle = "Website developer";

class Splash extends React.Component{
    colorName() {
        var changeColor = index => {
            this.refs[`titleLetter${index}`].className += " transitioned";
            if(title.length > index + 1)
                window.setTimeout(() => changeColor(index+1), 75);
            else 
                this.refs.subtitle.className += " transitioned";
        };
        
        changeColor(0);
    }
    
    componentDidMount() {
        window.setTimeout(() => this.colorName(), 500);
    }
    
    render() {
        return (
            <div className="Splash">
                <div>
                    <div className="title">
                        {(()=>{
                            var formattedTitle = [];
                            for(var i in title) {
                                formattedTitle.push(
                                    <span key={i} ref={`titleLetter${i}`}>
                                        {title[i]}
                                    </span>
                                );
                            }
                            
                            return formattedTitle;
                        })()}
                    </div>
                    <div className="subtitle"
                        ref="subtitle">
                        {subtitle}
                    </div>
                </div>
                <div>
                    Why fit in when you're born to stand out?
                    <br />
                    - Dr. Suess
                </div>
            </div>
        );
    }
}

export default Splash;