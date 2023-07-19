import React from 'react'
import { useLocation } from 'react-router-dom'

const Todo = () => {
    const location=useLocation()
    const todo = location.state
  return (
    <div>
<img src={todo.picture} alt="" />
        <p>{todo.name}</p>
        <p>{todo.price}</p>
    </div>
  )
}

export default Todo