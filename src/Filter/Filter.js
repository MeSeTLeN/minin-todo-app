import React from "react";
import './Filter.css'

export default function Filter({ selectHandler }) {
  return (
    <select onChange={selectHandler} className='filter'>
      <option value="all" className='filter'>All</option>
      <option value="completed" className='filter'>Completed</option>
      <option value="uncompleted" className='filter'>Uncompleted</option>
    </select>
  );
}
