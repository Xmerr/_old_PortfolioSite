import React from 'react';
import ReactDOM from 'react-dom';

require('./base.scss');

var scroll = require('scroll-into-view');

class Base extends React.Component{
    componentDidMount() {
        setTimeout(() => {
            scroll(this.refs.intro, {
               time: 1000
            });
        }, 5000);
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
                <div className="resume"
                    ref="intro">
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