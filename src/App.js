import React from 'react';
import './style.css';
//import AddItem from "./AddItem"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      list: []
    }
  }


  addItem = (e) => {
    e.preventDefault();
    const todo = {
      id: 1+Math.random(),
      value: this.state.todo, 
      complete: false
    }

    let list = [...this.state.list]
    if(this.state.todo.length>1)
     list.push(todo);
     else 
     alert("Please enter your todo");
    this.setState({
      list,
      todo: ""
    })
  
  }

  updateTodo = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  deleteTodo = (id) => {
    const list = [...this.state.list]
    const updateList = list.filter(item => item.id !== id)
    this.setState({
      list: updateList
    })
  }
<<<<<<< HEAD

  handleChecked (e, id) {

    let newlist = this.state.list.map(each => {
      if(each["id"] === id){
        if (e.target.checked) {
          each["complete"] = true;
        }
        
        else {
          each["complete"] = false;
        }
      }
      return each;
    });
    this.setState({
      list: newlist
    });
  }

render(){
  return (
    <div className="App">
          <h1>The List</h1>
          <div className="AddTodoSection">
                <form onSubmit = {(e)=>this.addItem(e)}>
                    <input value = {this.state.todo}  className="Input" type="text" placeholder=" What do you want to do?" 
                    onChange = {e => this.updateTodo("todo",e.target.value)}/>
                    </form>
                    </div>
                    <br/>
                    <ul>
                    {this.state.list.map(each =>{
                        return (
                        <li key = {each.id}>
                            <input onClick = {(e)=>this.handleChecked(e,each.id)} className="Itemcheckbox"  type="checkbox"/>
                            <p className = {each.complete ? "iscompleted" : "notcompleted"}>{each.value}</p>
                        <button className = "Deletebutton" onClick = {() => this.deleteTodo(each.id) }>X</button>
                        </li>
                        )
                    })}
                </ul>
                </div>
  );
}
}

export default App;


