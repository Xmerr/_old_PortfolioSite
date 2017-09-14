import data from '../data';
require('./splash.scss');

class Splash extends React.Component{
    colorName() {
        var changeColor = index => {
            this.refs[`titleLetter${index}`].className += " transitioned";
            if(data.title.length > index + 1)
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
                    <h1 className="title">
                        {(()=>{
                            var formattedTitle = [];
                            for(var i in data.title) {
                                formattedTitle.push(
                                    <span key={i} ref={`titleLetter${i}`}>
                                        {data.title[i]}
                                    </span>
                                );
                            }
                            
                            return formattedTitle;
                        })()}
                    </h1>
                    <h2 className="subtitle"
                        ref="subtitle">
                        {data.subtitle}
                    </h2>
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