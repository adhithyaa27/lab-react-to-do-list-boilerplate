import React from "react";
import TodoItem from "./assets/components/Todoitem";

class Todo extends React.Component{
  constructor(){
    super();
    this.state ={
      input:"",
      todolist: [],
    }
  }

 inputChange=(e)=>{
  this.setState({
    input : e.target.value,
  })
 }

 formSubmit = (e)=>{
  e.preventDefault();
  if (this.state.input.length > 0){
    this.setState({
      input : "",
      todolist : [...this.state.todolist, this.state.input]
    })
  }
  console.log("tasks",this.state.todolist)
 }

 updateItem = (newitem, index) =>{
  let data = this.state.todolist;
  data.splice(index, 1, newitem)
  this.setState({
    todolist : data,
  })
 }

 deleteItem =(index) =>{
  let data = this.state.todolist;
  data.splice(index,1);
  this.setState({
    todolist: data,
  })
 }


  render(){
    return(
      <>
        <div>
          <form onSubmit={this.formSubmit}>
            <input id="input" type="text" placeholder="ENTER THE LIST" 
            value={this.state.input}
            onChange={this.inputChange} />
            <button>ADD ITEM</button>
          </form>
          <h3>MY TASKS:{this.state.input}</h3>
          <div>
            <h2>MY TO-DO-LIST</h2>
            {
              this.state.todolist.length == 0 ? (
                <>
                <h3>THERE IS NO TASK TO BE DONE </h3>
                </>
              ):(
                this.state.todolist.map((ele, i)=>{
                  return(
                    <>
                    <div key={i}>
                      <TodoItem
                      e = {ele}
                      index = {i}
                      updateItem = {this.updateItem}
                      deleteItem = {this.deleteItem}
                      />
                    </div>
                    </>
                  )
                })


              )
            }
          </div>

        </div>
      </>
    )
  }
}
export default Todo; 