import { useCallback, useState } from 'react'
import '../components/ToDoList.css'
import ToDoItem from "./ToDoItem"

const ToDoList =() => {
 const[inputValue , setInputValue] = useState('')
 const[toDos , setToDos] = useState([{id:1 ,todo: "workout"}])
  
  const onChange=(e)=>{
   const value = e.target.value 
  setInputValue(value)
  }

   const addTodo = (e) =>{
    e.preventDefault();
    const todo = {
      id: toDos.length +1,
      name:inputValue
    }
    setToDos((prev) =>[...prev,todo ])
   setInputValue('')
  }
   const removeTodo = useCallback ((id) => {
     setToDos ((prev ) => prev.filter((t) => t.id !== id)
   )},[])
  return ( 
  <div className="App">
    <form onSubmit={addTodo}>
          <input
            type="text" 
            onChange={onChange}
            value={inputValue}
          />
          <button className="add-btn" type="submit">Add</button>
        </form>
        {toDos.map((t) =>(
          <ToDoItem key={t.id} id={t.id} name={t.name} action={removeTodo}/>
        ))}
      </div>
  )
  
  }


export default ToDoList
