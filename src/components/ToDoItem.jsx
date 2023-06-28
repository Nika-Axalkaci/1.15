import React from 'react'
import '../components/ToDoList.css'

const ToDoItem  = ({id , name, action})=>{
  console.log(id);   

   return( 
   <div key={id} className="input-p">
    <p>{id}</p>
    <p>name: {name}</p>
    <button onClick={()=> action(id)} className='remove-btn' >remove</button>

  </div>) 

  }

export default React.memo(ToDoItem)
