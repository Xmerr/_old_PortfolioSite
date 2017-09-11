const title = "Wiley Hilton";

class Splash extends React.Component{
    colorName() {
        var changeColor = index => {
            this.refs[`titleLetter${index}`].className += " colored";
            if(title.length > index + 1)
                window.setTimeout(() => changeColor(index+1), 100);
        };
        
        changeColor(0);
    }
    
    componentDidMount() {
        window.setTimeout(() => this.colorName(), 1000);
    }
    
    render() {
        return (
            <div className="Splash">
                <div>
                    <span className="title">
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
                    </span>
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