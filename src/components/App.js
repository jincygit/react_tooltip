// ------------------------------------------------App.js Component------------------------------------------------

// ----------------Importing React,& files from component----------------
import React from 'react';
import './App.css';
import Tool from './Tool';
import SelectPostition from './SelectPostition';

class App extends React.Component {
  constructor(){
    super();

    //default  value for position & showTooltip
    this.state = {
      showToolTip: false,
       position: "top"     
    }
  }

  //Function for changTooltip Position
  changeShowToolTip = (type) => {
    // getting current tooltip status
    const { showToolTip } = this.state;
    let showToolTipStatus = showToolTip;
    //using 'type' to detect whether the event is mouseenter or mouseleave and assign value based on the event
    if(type=="leave")
    {
      showToolTipStatus = false; 
    }
    else{
      showToolTipStatus = true; 
    }
    // getting position from user
    let position = document.getElementById("positions").value;  

    console.log("showToolTip status on hover",showToolTipStatus,"  type ",type)
    //by using setState changing tooltip status
    this.setState({
      showToolTip: !showToolTip,
      position
    });
  }

  render(){
    return (
      <div className="App">
        {/* component will receive the ‘position‘ and 'tootltip status' of tooltip as prop */}
        <Tool 
        state={this.state}
        changeShowToolTip = {this.changeShowToolTip}
        />
        <SelectPostition state={this.state} />
      </div>
    );
  }
}

export default App;
