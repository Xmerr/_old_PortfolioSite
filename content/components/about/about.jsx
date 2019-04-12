
class About extends React.Component {
    render() {
        return (
            <div className='About'>
                {(() => {
                    var r = [];
                    for(var i = 100; i >= 0; i--) {
                        r.push(i);
                        r.push(<br />);
                    }

                    return r;
                })()}
            </div>
        )
    }
};

About.propTypes={
};

export default About;