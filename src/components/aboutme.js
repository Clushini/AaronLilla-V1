import React from 'react';
import './../App.css';

const AboutMe = () => {
    return(
        <div>
            <div className="aboutpic"><img src="/img/face.png" alt=""/></div>
            <div className="abouttitle">
                <h1>Aaron Lilla</h1>
                <h2>Web Designer & Developer</h2>
            </div>
            <div className="aboutdescription">I'm a Full Stack Web Developer & Designer located in the Las Vegas, NV area. I've always enjoyed tinkering with technology and making things work. I'm self taught in all programing languages and technologies and am constantly on the hunt for knowledge to add to my web dev armory. I've been employed in several fields from construction to the medical cannabis industry and have gained a mountain of work experience in the real world and a "get it done" work ethic. Technology is my passion.</div>
            <div className="aboutskillstitle">Top Skills</div>
            <div className="topskills">
                <img src="/img/html5.png" alt=""/>
                <img src="/img/css3.png" alt=""/>
                <img src="/img/js.png" alt=""/>
                <img src="/img/node.png" alt=""/>
                <img src="/img/react.png" alt=""/>
                <img src="/img/redux.png" alt=""/>
                <img src="/img/jquery.png" alt=""/>
            </div>
            <div className="expander"></div>
        </div>
    );
}

export default AboutMe;