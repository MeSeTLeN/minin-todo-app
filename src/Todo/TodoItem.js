import React from "react";
import PropTypes from 'prop-types'

 function TodoItem({ todo, i }) {
  return (
    <li>
      <strong>{i + 1} </strong>
      {todo.title}
    </li>
  );
}

TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
}

export default TodoItem