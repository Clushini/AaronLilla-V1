import React, { Component } from 'react';
import './../App.css';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {firstname: '', lastname: '', email: '', phone: '', descript: '', company: '', error: false, submitted: false};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeDescript = this.changeDescript.bind(this);
        this.changeCompany = this.changeCompany.bind(this);
    }

    changeFirstName(event) {
        this.setState({firstname: event.target.value});
    }

    changeLastName(event) {
        this.setState({lastname: event.target.value});
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    changePhone(event) {
        this.setState({phone: event.target.value});
    }

    changeDescript(event) {
        this.setState({descript: event.target.value});
    }

    changeCompany(event) {
        this.setState({company: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.state);
        if (this.state.firstname && this.state.descript) {
            fetch('http://aaronlilla.com:3001/contactme', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: this.state.firstname,
                    lastName: this.state.lastname,
                    email: this.state.email,
                    phone: this.state.phone,
                    company: this.state.company,
                    descript: this.state.descript
                })
            });
            this.setState({submitted: true});
            this.setState({error: false});
        }
        else {
            this.setState({error: true});
        }
    }

    render() {
        return(
            <div>
                <h1 className="contacttitle">CONTACT ME</h1>
                <h2 className="contactphone">(702) 630-6976</h2>
                {this.state.error && <div className="errormsg">Error! You must please include at least a first name and a description to send your message.</div>}
                {!this.state.submitted && <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.firstname} onChange={this.changeFirstName} placeholder="First Name"/>
                    <input type="text" value={this.state.lastname} onChange={this.changeLastName} placeholder="Last Name"/>
                    <input type="text" value={this.state.email} onChange={this.changeEmail} placeholder="E-Mail"/>
                    <input type="number" value={this.state.phone} onChange={this.changePhone} placeholder="Phone Number"/>
                    <input type="text" value={this.state.company} onChange={this.changeCompany} placeholder="Company"/>
                    <textarea type="text" value={this.state.descript} onChange={this.changeDescript} placeholder="Description" className="input_desc"/>
                    <input type="submit" value="SUBMIT" className="submitbutton"/>
                </form> }
                {this.state.submitted && <div className="submittedmessage">Your message has been submitted. I'll get back to you ASAP! Thank you.</div>}
                <div className="expander"></div>
            </div>
        );
    }
}

export default Contact;