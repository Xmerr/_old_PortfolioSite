import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './menu.jsx';
import Projects from './projects.jsx';

var images = {
    ribbon: require('../images/githubRibbon.webp'),
    arrow: require('../images/Arrow.webp')
};

require('jarallax');
require('./base.scss');
var velocity = require('velocity-animate');

class Base extends React.Component{
    componentDidMount() {
        this.areas = {
            'Home': {
                main: this.refs.Splash    
            },
            'My Story': {
                main: this.refs.Story,
                1: this.refs.FirstPrograms,
                2: this.refs.Education,
                3: this.refs.IT,
                4: this.refs.Development,
                5: this.refs.Progress
            },
            "Projects" : {
                main: this.refs.Projects.refs.main
            },
            'Resume': {
                main: this.refs.Resume
            }
        };
        
        this.scrollTimer = null;
        
        document.onkeydown = () => this.keypress();
        document.onscroll = () => {
            if(!this.processingScroll) {
                console.log("scroll registered");
                if(this.scrollTimer) {
                    window.clearTimeout(this.scrollTimer);
                }
                
                this.scrollTimer = window.setTimeout(() => {
                    this.keypress({
                       keyCode: "scroll" 
                    });
                }, 750);
            }
        };
        
        global.jarallax(document.querySelectorAll('.MainArea>div, .Story div'), {
           speed: 0.2 
        });
        
        this.forceUpdate();
    }
    
    scroll(dom) {
        velocity(dom, "scroll", {
           easing: "easeOutBack",
           duration: 1000,
           begin: () => {
                this.processingScroll = true;
                console.log("scroll started");
           },
           complete: () => {
               this.processingScroll = false;
               console.log("done scrolling");
           }
        });
    }
    
    keypress(e) {
        if(this.processingScroll) {
            return;
        }
        
        this.processingScroll = true;
        
        e = e || window.event;
        
        var elem = (() => {
            var elems = {
                previous: null,
                next: null
            };
            var regions = Object.keys(this.areas);
           
            for(var i = 0; i < regions.length; i++){
                var sections = Object.keys(this.areas[regions[i]]);
                for(var j = 0; j < sections.length; j++) {
                    if(
                        (
                            !elems.previous &&
                            this.areas[regions[i]][sections[j]].getBoundingClientRect().top < -50
                        ) ||
                        (
                            this.areas[regions[i]][sections[j]].getBoundingClientRect().top < -50 &&
                            this.areas[regions[i]][sections[j]].getBoundingClientRect().top > elems.previous.getBoundingClientRect().top
                        )
                    ) {
                        elems.previous = this.areas[regions[i]][sections[j]];
                    }
                    else if(
                        (
                            !elems.next &&
                            this.areas[regions[i]][sections[j]].getBoundingClientRect().top > 50
                        ) ||
                        (
                            elems.next &&
                            this.areas[regions[i]][sections[j]].getBoundingClientRect().top > 50 &&
                            this.areas[regions[i]][sections[j]].getBoundingClientRect().top < elems.next.getBoundingClientRect().top
                        )
                    ){
                        elems.next = this.areas[regions[i]][sections[j]];
                    }
                    else {
                        continue;
                    }
                }
            }
           
            return elems;
        })();
        
        if(e.keyCode === 37 || e.keyCode === 38) {
            if(e.preventDefault) {
                e.preventDefault();
            }
            this.scroll(elem.previous);
        }
        else if(e.keyCode === 39 || e.keyCode === 40) {
            if(e.preventDefault) {
                e.preventDefault();
            }
            this.scroll(elem.next);
        }
        else if (e.keyCode === "scroll") {
            if(elem.previous && elem.next && (-elem.previous.getBoundingClientRect().top === elem.next.getBoundingClientRect().top)) {  }
            else if(elem.previous && elem.next && (-elem.previous.getBoundingClientRect().top) > elem.next.getBoundingClientRect().top) {
                this.scroll(elem.next);
            }
            else if (elem.previous) {
                this.scroll(elem.previous);
            }
            else {
                if(elem.previous){
                    this.scroll(elem.previous);
                }
                else {
                    this.scroll(elem.next);
                }
            }
        }
    }
    
    render() {
        return(
            <div className='MainArea'>
                {(()=>{
                    if(this.areas) {
                        return(
                            <Menu
                                areas={this.areas}
                                scroll={dom => {
                                    this.scroll(dom, {
                                        time: 1000
                                    });
                                }}/>
                        );
                    }
                })()}
            
                <a href="https://github.com/Xmerr/PortfolioSite"
                    target="_blank"
                    id="githubRibbon">
                    <img src={images.ribbon}
                        draggable={false}
                        alt="Fork Me" />
                </a>
                
                <div className="arrows">
                    <img src={images.arrow}
                        className="arrow up"
                        onClick={() => this.keypress({keyCode: 37})}
                        draggable={false} />
                        
                    <img src={images.arrow}
                        className="arrow down"
                        onClick={() => this.keypress({keyCode: 39})}
                        draggable={false} />
                </div>
                
                <div className="splash"
                    ref="Splash">
                    <span className="quote">
                        Why fit in when you're born to stand out?
                        <br />
                        - Dr. Suess
                    </span>
                </div>
                
                <div className="Story"
                    ref="Story">
                    <div className="FirstPrograms"
                        ref="FirstPrograms">
                        <div>
                            <div>
                                <p>
                                    My career began in middleschool when I played around with bat files.
                                    My first application was a small little y/n program that looked like a scene from "The Matrix".
                                    
                                    <hr />
                                    
                                    My passion for programming continued into my highschool years when I created an application that worked simular to access.
                                    The program had a backend application (written in java) on a remote server than was running MySQL.
                                    Anyone who had the client application (also written in java) could access the server data through very unsecure means and create tables/add data/view data/update data.
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="Education" ref="Education">
                        <div>
                            <div>
                                <p>
                                    I wasn't aware of how computers software actually worked until my first college level programming class, Visual Basic.
                                    After that class I began to seek programming knowledge anyway I could - I even built a text based game using C++.
                                    
                                    After graduating highscool with my Associate of General Studies I moved to UNA to complete two Bachelor degrees in Computer Information Systems and Project Management.
                                    
                                    During my education I obtained two Microsoft Office certifates and became a Certified Associate of Program Management (CAPM) from the Project Management Institute and graduated with honors.
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="IT" ref="IT">
                        <div>
                            <div>
                                <p>
                                    After college I started my career at Simulation Techonologies as the corporate IT guy.
                                    
                                    I worked on everything you would expect and more from a company of it's size:
                                    upgrading access databases to SQL, moving an asp classic website to asp.net, rebuilding a windows server, rewiring the network, etc.
                                    
                                    It wasn't long until I was moved into a development position.
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="Development" ref="Development">
                        <div>
                            <div>
                                <p>
                                    I was moved onto a government contract and was put into a group with one other developer.
                                    We had limited control over what we could do as every new bit of technology had to be approved by the government.
                                    
                                    6 months later the original developer was moved to a new project and I was approved to use aspnet.
                                    
                                    I started remaking the application by using asp.net MVC in C# with Razor.
                                    
                                    <hr />
                                    
                                    Two years later the original developer rejoined my group and I was asked to hire one additional developer.
                                    I was also given the title of "Team Lead".
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="Progress" ref="Progress">
                        <div>
                            <div>
                                <p>
                                    Dispite the government's slow adaption of new technologies I have not slowed down.
                                    My personal projects use Nodejs, such as this website. 
                                    
                                    I have moved my group into using React, Redux, Websockets, and Webpack to keep our software current.
                                    
                                    <hr />
                                    
                                    Today most of my work outside SimTech is spent making a bot for a chat application called "Discord".
                                    
                                    The bot listens for commands and interprets the intent of the command using Api.ai.
                                    Once completed the bot will have the knowledge of all dnd 5e official books as well as some vetted homebrew rules.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Projects ref="Projects" />
                
                <div className="Resume"
                    ref="Resume">
                    <h1>
                        Wiley Hilton
                    </h1>
                    <div className="contactInfo">
                        wileyhilton@gmail.com
                        <br />
                        Huntsville Alabama
                    </div>
                    
                    <div className="summary">
                        <h2>
                            Professional Summary:
                        </h2>
                        <div>
                            Versatile Software Developer versed in C#,
                            JavaScript, HTML5, SQL, and MVC/MVVM framework.
                            
                            Self-directed leader who fosters a collaborative
                            and supportive team environment. Quickly picks up new
                            and emerging technologies.
                        </div>
                    </div>
                    
                    <div className="skills">
                        <h2>
                            Skills:
                        </h2>
                        <div>
                            <ul>
                                <li>
                                    C#, JavaScript, React.js (ES5 and ES6), and HTML5 specialist
                                </li>
                                <li>
                                    Java/SQL/NoSQL/C++/Entity Framework
                                </li>
                                <li>
                                    Database design
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Understanding of PHP and Python
                                </li>
                                <li>
                                    Excellent problem-solving abilities
                                </li>
                                <li>
                                    Agile Project Trained (SCRUM)
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div>
                        <h2>
                            Work History
                        </h2>
                        <div>
                            <div>
                                <h3>
                                    Lead Web Developer
                                    <br />
                                    Simulation Technology, Inc. - Huntsville, Alabama
                                </h3>
                                <ul>
                                    <li>
                                        Built, tested and deployed scalable, highly available and modular software products.
                                    </li>
                                    <li>
                                        Strengthened developmental methodologies by introducing a code quality document.
                                    </li>
                                    <li>
                                        Coded 17 websites using C#.NET.
                                    </li>
                                    <li>
                                        Worked closely with clients to establish problem specifications and system designs.
                                    </li>
                                    <li>
                                        Wrote C#.NET applications in MVC architecture.
                                    </li>
                                    <li>
                                        Identified and suggested new technologies and tools for enhancing product value and increasing team productivity.
                                    </li>
                                    <li>
                                        Implemented Git for version control.
                                    </li>
                                    <li>
                                        Led a group of 3 developers in the design, and development of C#-based software solutions.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3>
                                Tutor / Consultant
                                <br />
                                Freelance - Huntsville Alabama
                            </h3>
                            <ul>
                                <li>
                                    Tutored introductory and upper level courses in Computer Programming.
                                </li>
                                <li>
                                    Assisted individuals with creating and managing websites.
                                </li>
                                <li>
                                    Worked on independent software and applications
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="education">
                        <h2>
                            Education
                        </h2>
                        <h3>
                            Bachelors of Business Administration: Major 1: Computer Information System; Major 2: Management
                            <br />
                            University of North Alabama - Florence Alabama
                        </h3>
                        <ul>
                            <li>
                                Emphasis in Server Side Coding and Project Management.
                            </li>
                            <li>
                                Joined Phi Kappa Phi honor society.
                            </li>
                            <li>
                                Graduated with Honors.
                            </li>
                            <li>
                                Received the Certified Associate of Project Management Certificate from the Project Management Institute
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Base;

ReactDOM.render(
    <Base />,
    document.getElementById('content')
);