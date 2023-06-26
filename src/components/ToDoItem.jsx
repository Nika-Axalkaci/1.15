import React, {  PureComponent } from 'react'
import '../components/ToDoList.css'

class ToDoItem extends PureComponent {

  
  render(){
    
    const {id , name, action} = this.props
   return(    
   <div key={id} className="input-p">
    <p>{id}</p>
    <p>name: {name}</p>
    <button onClick={()=> action(id)} className='remove-btn' >remove</button>

  </div>) 

  }
}
export default ToDoItem