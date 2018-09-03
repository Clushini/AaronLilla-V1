import React from 'react';
import './../App.css';

const Resume = () => {
    return(
        <div>
            <iframe src="/misc/resume.pdf" width="100%" height="1150px"/>
            <div className="expander"></div>
        </div>
    );
}

export default Resume;