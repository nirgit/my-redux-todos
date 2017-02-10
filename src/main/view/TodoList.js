import React from 'react';

function TodoList(props) {
  return (
    <div className="square">{props.name || 'Square'}</div>
  );
}

export default TodoList;
