import React from 'react';
import './style.css';
import RemainigChars from "./RemainingChars"

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
      id: 1 + Math.random(),
      value: this.state.todo,
      complete: false
    }

    let list = [...this.state.list]
    if (this.state.todo.length > 1)
      list.push(todo);
    else
      alert("Please enter your todo");
    this.setState({
      list,
      todo: ""
    })
  }

  updateTodo = (key, value) => {
    this.setState({ [key]: value.slice(0, 100) })

  }

  deleteTodo = (id) => {
    const list = [...this.state.list]
    const updateList = list.filter(item => item.id !== id)
    this.setState({
      list: updateList
    })
  }

  handleChecked(e, id) {

    let newlist = this.state.list.map(each => {
      if (each.id === id) {
        if (e.target.checked) {
          each.complete = true;
        }

        else {
          each.complete = false;
        }
      }
      return each;
    });
    this.setState({
      list: newlist
    });
  }

  handleEditChange = (id, newValue) => {
    let editedListTodo = this.state.list.map(each => {
      if (each.id === id) {
        each.value = newValue;
      }
      return each
    })
    this.setState({
      list: editedListTodo
    })
  }


  render() {
    return (
      <div className="App">
        <h1>The List</h1>
        <div className="AddTodoSection">
          <form onSubmit={(e) => this.addItem(e)}>
            <input value={this.state.todo} className="Input" type="text" placeholder=" What do you want to do?"
              onChange={e => this.updateTodo("todo", e.target.value)} />
          </form>
        </div>
        <RemainigChars length={this.state.todo.length} />
        <br />
        <ul>
          {this.state.list.map(each => {
            return (
              <li key={each.id}>
                <input onClick={(e) => this.handleChecked(e, each.id)} className="Itemcheckbox" type="checkbox" />
                <input
                  className={each.complete ? "iscompleted" : "notcompleted"}
                  type="text"
                  value={each.value}
                  onChange={(e) => this.handleEditChange(each.id, e.target.value)}></input>
                <button className="Deletebutton" onClick={() => this.deleteTodo(each.id)}>X</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;