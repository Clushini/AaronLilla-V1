import React, { Component } from 'react';
import Resume from './resume';
import AboutMe from './aboutme';
import Contact from './contact';
import Portfolio from './portfolio';
import './../App.css';

let test = [];

class Right extends Component {
    constructor(props) {
        super(props);

        this.getPage = this.getPage.bind(this);
        this.test = [];
    }

    getPage(value) {
        this.props.gotPage(value);
    }

    componentWillMount() {
        test.splice(0);
        test.push(this.props.page.hue);
    }

    render() {
        return(
            <div id="main_right">
                <div className={test + " show"}>
                    <div id="main_right_divider"></div>
                    <div id="nav">
                        <div className={(this.props.page.name === "Portfolio") ? "navbutton navbutton_active" : "navbutton hvr-shutter-out-vertical"} onClick={() => this.getPage("Portfolio")}>PORTFOLIO</div>
                        <div className={(this.props.page.name === "Contact") ? "navbutton navbutton_active" : "navbutton hvr-shutter-out-vertical"} onClick={() => this.getPage("Contact")}>CONTACT</div>
                        <div className={(this.props.page.name === "About Me") ? "navbutton navbutton_active" : "navbutton hvr-shutter-out-vertical"} onClick={() => this.getPage("About Me")}>ABOUT</div>
                        <div className={(this.props.page.name === "Resume") ? "navbutton navbutton_active" : "navbutton hvr-shutter-out-vertical"} onClick={() => this.getPage("Resume")}>RESUME</div>
                    </div>
                    <div id="rightcontent">
                        {this.props.page.name === "Portfolio" && <Portfolio />}
                        {this.props.page.name === "Contact" && <Contact />}
                        {this.props.page.name === "About Me" && <AboutMe />}
                        {this.props.page.name === "Resume" && <Resume />}
                    </div>
                </div>
            </div>
        );
    }

}

export default Right;