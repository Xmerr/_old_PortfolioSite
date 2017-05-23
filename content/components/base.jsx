import React from 'react';
import ReactDOM from 'react-dom';

require('jarallax');
require('./base.scss');

var scroll = require('scroll-into-view');

class Base extends React.Component{
    componentDidMount() {
        setTimeout(() => {
            scroll(this.refs.resume, {
               time: 1000
            });
        }, 5000);
        
        global.jarallax(document.querySelectorAll('.MainArea>div'), {
           speed: 0.2 
        });
    }
    
    render() {
        return(
            <div className='MainArea'>
                <div className="splash">
                    <span className="quote">
                        Why fit in when you're born to stand out?
                        <br />
                        - Dr. Suess
                    </span>
                </div>
                
                <div className="FirstPrograms"
                    ref="FirstPrograms">
                    <p>
                        My career began in middleschool when I played around with bat files.
                        My first application was a small little y/n program that looked like a scene from "The Matrix".
                        
                        <hr />
                        
                        My passion for programming continued into my highschool years when I created an application that worked simular to access.
                        The program had a backend application (written in java) on a remote server than was running MySQL.
                        Anyone who had the client application (also written in java) could access the server data through very unsecure means and create tables/add data/view data/update data.
                    </p>
                </div>
                
                <div ref="Education">
                    <p>
                        I wasn't aware of how computers software actually worked until my first college level programming class, Visual Basic.
                        After that class I began to seek programming knowledge anyway I could - I even built a text based game using C++.
                        
                        After graduating highscool with my Associate of General Studies I moved to UNA to complete my Bachelors in Computer Information Systems and Project Management.
                        
                        During my education I achieved two Microsoft Office certifates and became a Certified Associate of Program Management (CAPM) from the Project Management Institute and graduated with honors.
                    </p>
                </div>
                
                <div ref="IT">
                    <p>
                        After college I started my career at Simulation Techonologies as the corporate IT guy.
                        
                        I worked on everything you would expect and more from a company of it's size:
                        upgrading access databases to SQL, moving an asp classic website to asp.net, rebuilding a windows server, rewiring the network, etc.
                        
                        It wasn't long until I was moved into a development position.
                    </p>
                </div>
                
                <div ref="Development">
                    <p>
                        I was moved onto a government contract and was put into a group with one other developer.
                        We had limited control over what we could do as every new bit of technology had to be approved by the government.
                        
                        6 months later the original developer was moved to a new project and I was approved to use aspnet.
                        
                        I started remaking the application by using asp.net MVC with C# and Razor.
                        
                        <hr />
                        
                        Two years later the original developer rejoined my group and I was asked to hire one additional developer.
                        I was also given the title of "Team Lead".
                    </p>
                </div>
                
                <div ref="Progress">
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
                
                <div className="resume"
                    ref="resume">
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