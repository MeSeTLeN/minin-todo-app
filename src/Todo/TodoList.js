import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos }) {
  return (
    <ul style={{ listStyle: 'none' }}>
      {todos.map((el, i) => {
        return <TodoItem el={el} key={i} i={i} />
      })}
    </ul>
  )
}
