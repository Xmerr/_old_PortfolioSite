import React from 'react';

var images = {
    website: require('../images/website.webp')
};

class Projects extends React.Component{
    componentWillMount() {
        this.projects = [
            {
                title: "This Website",
                subtitle: "Used to showcase my abilities and act as a focal point for my other projects",
                image: images.website,
                github: "https://github.com/Xmerr/PortfolioSite"
            },
            {
                title: "Xmerbot",
                subtitle: "Xmerbot's purpose is to save images to be retrieved when needed. Currently that's all he can do. " +
                    "In the future he will have much more capabilities such as querying all DnD 5e rule books, spell books, and items.",
                github: "https://github.com/Xmerr/Xmerbot",
                image: images.website
            }
        ];
    }
    
    render() {
        return (
            <div className="Projects" ref="main">
                {(()=>{
                    var minHeight = (100 / Math.ceil(this.projects.length / 2)) + "%";
                    var projects = [];
                    
                    for(var i = 0, j = this.projects.length - 1; i <= j ; i++) {
                        var click = (index => { return () => window.open(this.projects[index].github, '_blank') })(i);
                        
                        projects.push(
                            <div className="col-xs-6"
                                key={this.projects[i].title}
                                onClick={click}
                                style={{
                                    minHeight
                                }}>
                                <div className="Header">
                                    <h4>
                                        {this.projects[i].title}
                                    </h4>
                                    <p>
                                        {this.projects[i].subtitle}
                                    </p>
                                </div>
                                <div className="Image"
                                    style={{
                                        backgroundImage: `url(${this.projects[i].image})`
                                    }}
                                />
                            </div>
                        );
                    }
                    
                    return projects;
                })()}
            </div>
        );
    }
}

export default Projects;