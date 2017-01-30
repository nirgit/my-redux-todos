import React from 'react';

function Square(props) {
  return (
    <div className="square">{props.name || 'Square'}</div>
  );
}

export default Square;
