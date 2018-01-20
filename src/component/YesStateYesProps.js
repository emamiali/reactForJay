import React, { Component } from 'react';

class YesStateYesProps extends Component {
  //if you dont need to bind or initialize state you dont need a constructor
  constructor(props) {
    super(props);
    // this is where I am initializing state
    this.state = {
      text: "I am from State"
    }


  }

  render() {
    return (
      <div style={{background: "purple"}}>
        <p>{this.state.text}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default YesStateYesProps;
