import React from "react";

export default function Filter({ selectHandler }) {
  return (
    <select onChange={selectHandler}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  );
}
