var Avatar = require('../../images/avatar');
import Paper from 'material-ui/Paper';

import data from '../data';
var paper = require('../../images/paper.png');
require('./aboutStyle');

class AboutMe extends React.Component{
    render() {
        return(
            <div className="AboutMe">
                <Paper className="Paper" zDepth={3} style={{
                    backgroundImage: `url(${paper})`
                }}>
                    <div>
                        <div>
                            <h1>
                                Wiley Hilton
                            </h1>
                            <h3>
                                Website Developer - Yrs 5
                            </h3>
                        </div>
                        <div className="attributes">
                            <div>
                                {data.stats.map(datum => {
                                    return (
                                        <div  key={datum.name} className="StatWrap">
                                            <div className="Stat">
                                                <div className="title">
                                                    <div>
                                                        {datum.name}
                                                    </div>
                                                </div>
                                                <div className="value">
                                                    {datum.value} / 10
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="skills">
                                <div>
                                    <h5>
                                        Skills
                                    </h5>
                                </div>
                                {data.skills.sort((a, b) => {
                                    if(a.name < b.name) {
                                        return -1;
                                    }
                                    if(a.name > b.name) {
                                        return 1;
                                    }
                                    
                                    return 0;
                                }).map(datum => {
                                    return (
                                        <div key={datum.name}>
                                            <div className="value">
                                                {datum.value} / 10
                                            </div>
                                            <div className="name">
                                                {datum.name}
                                            </div>
                                        </div>
                                    );
                                })}
                                <div>
                                    <h5>
                                        Hobbies
                                    </h5>
                                </div>
                                {data.hobbies.sort((a, b) => {
                                    if(a.name < b.name)
                                        return -1;
                                        
                                    if(a.name > b.name)
                                        return 1;
                                    
                                    return 0;
                                }).map(datum => {
                                    return (
                                        <div key={datum.name}>
                                            <div className="value">
                                                {datum.value} / 10
                                            </div>
                                            <div className="name">
                                                {datum.name}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="middleColumn">
                        <div className="education">
                            {data.education.map(edu => {
                                return (
                                    <div key={edu.name}>
                                        <div className="title">
                                            <div>
                                                Education
                                            </div>
                                        </div>
                                        <div className="name">
                                            {edu.name}
                                        </div>
                                        <div className="degree">
                                            {edu.degree}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        <div className="avatar">
                            <img src={Avatar} />
                        </div>
                        
                        <div className="certs">
                            <div className="title">
                                <div>
                                    Certifications
                                </div>
                            </div>
                            {data.certifications.map(cert => {
                                return(
                                    <div key={cert}>
                                        {cert}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="details">
                        {data.details.map(detail => {
                            return (
                                <div key={detail.name}>
                                    <div className="story">
                                        {detail.value}
                                        
                                        <div className="title">
                                            <div>
                                                {detail.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default AboutMe;