import React from 'react';

var images = {
    website: require('../images/website.png'),
    dnd: require('../images/dndTool.png')
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
            },
            {
                title: "DnD Tool",
                subtitle: "This tool is being developed for dnd groups to better manage their campaigns. It will allow users " +
                    "to quickly create their characters to be used in campaigns as well as manage the campaign for the DM.",
                github: "https://github.com/Xmerr/DnD-5e",
                image: images.dnd
            }
        ];
    }
    
    render() {
        return (
            <div className="Projects" ref="main">
                {(()=>{
                    var maxHeight = (100 / Math.ceil(this.projects.length / 2)) + "%";
                    var projects = [];
                    
                    for(var i = 0, j = this.projects.length - 1; i <= j ; i++) {
                        var click = (index => { return () => window.open(this.projects[index].github, '_blank') })(i);
                        
                        projects.push(
                            <div className="col-xs-6"
                                key={this.projects[i].title}
                                onClick={click}
                                style={{
                                    maxHeight
                                }}>
                                <div className="Header">
                                    <h4>
                                        {this.projects[i].title}
                                    </h4>
                                    <p>
                                        {this.projects[i].subtitle}
                                    </p>
                                </div>
                                <img draggable="false"
                                    src={this.projects[i].image} />
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