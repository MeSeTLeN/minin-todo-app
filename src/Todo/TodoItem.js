import React, { useContext } from 'react'
import MyContext from '../context'

export default function TodoItem({ el, i }) {
  const { onToggle } = useContext(MyContext)

  return (
    <li>
      <input
        onChange={() => onToggle(el.id)}
        type='checkbox'
        checked={el.completed}
      />
      {i + 1 + ' ' + el.title}
      <button>&times;</button>
    </li>
  )
}
