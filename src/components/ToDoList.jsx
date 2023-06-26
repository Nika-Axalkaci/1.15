import { Component } from "react"
import '../components/ToDoList.css'
import ToDoItem from "./ToDoItem"

class ToDoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: "",
      show: true,
      error: null,
      todo: [
  
      ]
    }
  }
  
  static getDerivedStateFromError(error) {
    return {
      error: error.message,
    };
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
  toggle = ()=>{
    this.setState((prevState)=>{
      return{
        show:!prevState.show,
      }
    })
  }
  render(){
    console.log('render log');
  return ( <div className="App">
    <form onSubmit={this.addUser}>
          <input
            type="text" 
            onChange={this.onChange}
            value={this.state.inputValue}
          />
          <button className="add-btn" type="submit">Add</button>
        </form>
        <button onClick={this.toggle}> 
          toggle
        </button>
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