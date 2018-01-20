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
    const { counter } = this.state;
    this.setState({counter : this.state.counter += 1});
    console.log(counter);
  }

  render() {
    return (
      <div>
        {console.log('this is this: ', this)}
        <button onClick={this.handleClick}>
          Click!!!!!
        </button>
      </div>
    );
  };
}

export default IamGoingToBind;
