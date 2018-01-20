import React, { Component } from 'react';

class IamNotGoingToBind extends Component {
  state = {
    counter: 0
  }
  //this is binding automagically 
  render() {
    return (
      <div  style={{ margin: '10px', padding: '10px'}}>
        <button
          style={{fontSize: '20px'}}
          onClick={() => { this.setState({counter: this.state.counter + 1}); console.log('not Binded!!: ', this.state.counter);}}>
          Not Binded!!!!
        </button>
      </div>
    );
  };
}

export default IamNotGoingToBind;
