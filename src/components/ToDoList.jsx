import { Component } from "react"
import '../components/ToDoList.css'
import ToDoItem from "./ToDoItem"

class ToDoList extends Component{
  state = {
    inputValue: "",
    todo: [

    ]
  }
  onChange=(e)=>{
   const value = e.target.value 
   this.setState({
    inputValue: value,
   })
  }

  addUser = (e) =>{
    e.preventDefault();
    const todos = {
      id: this.state.todo.length +1,
      name:this.state.inputValue
    }
    this.setState({
      todo:[...this.state.todo, todos],
      inputValue: ""
    })
  }
  removeTodo = (id) => {
    const todo = this.state.todo.filter((t) => t.id !== id)
    this.setState({

      todo,
    }
    )
  }
  render(){
  return ( <div className="App">
    <form onSubmit={this.addUser}>
          <input
            type="text" 
            onChange={this.onChange}
            value={this.state.inputValue}
          />
          <button className="add-btn" type="submit">Add</button>
        </form>
        {this.state.todo.map((t) =>(
          <ToDoItem 
          key={t.id}
          id={t.id}
          name={t.name}
          action={this.removeTodo}
          done = {this.doneTodo}
          />
        ))}
      </div>
  )
  

  }
}

export default ToDoList