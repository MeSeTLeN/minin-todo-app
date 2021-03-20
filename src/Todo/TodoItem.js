import React from 'react'

export default function TodoItem({ el, i }) {
  return (
    <li>
      <input type='checkbox' checked={el.completed} />
      {i + 1 + ' ' + el.title}
      <button>&times;</button>
    </li>
  )
}
