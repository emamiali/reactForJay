import React from 'react';

function NoStateYesProps(props) {
  return (
    <div style={{background: "green", padding: '10px'}}>
      {props.aProp}
    </div>
  );
}

export default NoStateYesProps;
