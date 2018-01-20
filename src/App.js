import React, { Component } from 'react';
import YesStateNoProps from './component/YesStateNoProps';
import NoPropsNoState from './component/NoPropsNoState';
import NoStateYesProps from './component/NoStateYesProps';
import YesStateYesProps from './component/YesStateYesProps';
import IamGoingToBind from './component/IamGoingToBind';

class App extends Component {
  render() {
    return (
      <div>
        <NoPropsNoState />
        <YesStateNoProps />
        <YesStateYesProps text={"I am from props"} />
        <NoStateYesProps  aProp={"Chicken"} />
        <IamGoingToBind />
      </div>
    );
  }
}

export default App;
