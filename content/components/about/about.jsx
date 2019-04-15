import Avatar from '_images/avatar';
require('./about.scss');

class About extends React.Component {
    render() {
        return (
            <div className='About'>
                <div>
                    <Avatar 
                        style={{
                            height: "10rem"
                        }}
                    />
                    <h2>
                        Hi.
                    </h2>
                    <div>
                        I'm a web designer and front end developer (with full stack capabilities) based in Huntsville, Alabama. I have a passion for web development and I love to create responsive apps for the web.
                    </div>
                </div>

                <div className="sec">
                    <h1>
                        What I do.
                    </h1>
                    <div>
                        <div>
                            Image Here
                        </div>
                        <div>
                            I'm a developer, so I know how to create your website to run across devices using the latest technologies available.
                        </div>
                    </div>
                    <div>
                        <div>
                            I'm a researcher, I like to keep up to date with industry standards and best practices so I always know how to keep innovating.
                        </div>
                        <div>
                            Image Here
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

About.propTypes={
};

export default About;