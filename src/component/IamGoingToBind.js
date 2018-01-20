import React, { Component } from 'react';

class IamGoingToBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this);



  }
  handleClick() {
    this.setState({counter : this.state.counter += 1});
    console.log('this is binded: ', this.state.counter);
  }

  render() {
    return (
      <div  style={{ margin: '10px', padding: '10px'}}>
        <button onClick={this.handleClick} style={{fontSize: '20px'}}>
          Binded to 'this'
        </button>
      </div>
    );
  };
}

export default IamGoingToBind;
