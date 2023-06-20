import React from 'react'
import '../components/ToDoList.css'

export default function ToDoItem({id, name, action}) {
  return (
    <div key={id} className="input-p">
    <p>{id}</p>
    <p>name: {name}</p>
    <button onClick={()=> action(id)} className='remove-btn' >remove</button>

  </div>
  )
}
