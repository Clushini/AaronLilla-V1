import React, { Component } from 'react';
import Right from './components/right';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {name: "Portfolio", hue: "hue0", visible: false},
        {name: "Contact", hue: "hue150", visible: false},
        {name: "About Me", hue: "hue200", visible: true},
        {name: "Resume", hue: "hue250", visible: false}
      ]
    }

    this.pageReceived = this.pageReceived.bind(this);
  }

  pageReceived(value) {
    let copyOfState = Object.assign({}, this.state);
    this.state.pages.map(item => {
      let indexof = this.state.pages.indexOf(item);
      if (item.name === value) {
        copyOfState.pages[indexof].visible = true;
        //item.visible = true;
        return null;
      }
      else {
        copyOfState.pages[indexof].visible = false;
        //item.visible = false;
        return null;
      }
    })
    this.setState(copyOfState);
  }

  render() {
    let thisclass;
    this.state.pages.map(item => {
      if (item.visible) {
        thisclass = item.hue + "_2";
      }
      return null;
    });
    return (
      <div id="main">
        <div id="main_left">
          <div id="main_left_logo" className={thisclass}></div>
        </div>

      {
        this.state.pages.map(item => {
          if (item.visible) {
            return <Right gotPage={this.pageReceived} page={item}/>
          }
          else {
            return false
          }
        })
      }
      </div>
    );
  }
}

export default App;
