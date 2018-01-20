import React, { Component } from 'react'

const someData = [1,2,3,4];


class YesStateNoProps extends Component {
  state = {
    someData: someData
  }
  render() {
    console.log(this.state.someData);
    return (
      <div style={{background: "red"}}>
        <p>Yes State, No Props</p>
        {this.state.someData}
      </div>
    );
  }
}

export default YesStateNoProps;
