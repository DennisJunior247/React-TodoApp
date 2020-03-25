import React, { Component } from "react";
import HEader from "./Header";
import TodoItems from "./TodoItems";
class Todo extends Component {
  state = {
    todoItems: [],
    newTodo: ""
  };

  //Using react lifecycle, we cross-check out todoitems and update to localstorage if anychange occurs.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonState = JSON.stringify(this.state.todoItems);
      localStorage.setItem("todoItems", jsonState);
    }
  }
  componentDidMount() {
    const itemsFromLocalStorage = localStorage.getItem("todoItems");
    const TodoItems = JSON.parse(itemsFromLocalStorage);
    if (TodoItems) {
      this.setState(() => ({
        todoItems: TodoItems
      }));
    }
    //this one stopped working so we used the above if condition
    // this.setState({
    //   todoItems: TodoItems
    // });
  }

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
    // console.log(e.target.value);
  };

  handleSubmit = i => {
    i.preventDefault();
    this.setState(prevState => {
      //this if condition prevents empty input or we can use "REQUIRED, an input attribute"
      if (this.state.newTodo !== "")
        return {
          //this is done using concat method
          // todoItems: prevState.todoItems.concat(this.state.newTodo),
          //this is done using rest operator
          todoItems: [...prevState.todoItems, this.state.newTodo],
          newTodo: ""
        };
    });
    // document.querySelector("label").innerHTML = this.state.newTodo;
  };

  handleRemoveOneItem = itemToBeRomoved => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(
        todoItem => todoItem !== itemToBeRomoved
      )
    }));
  };

  handleRemoveAll = () => {
    // if(alert("You are about to delete you ToDo"))
    this.setState({ todoItems: [] });
  };

  render() {
    // console.log(this.state.todoItems);
    return (
      <div className="body">
        <div id="headerdiv">
          <HEader title="MY TODO-APP" />
        </div>

        <h1> Todo-List </h1>

        {/* below code takes my array and put it in an <li> each.  */}

        <br />

        <form>
          {/* <label id="Label" htmlFor="">
            Todo Items
          </label> */}
          {/* <br /> */}
          <input
            className={myStyles.inp}
            id="input"
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
            autoFocus={true}
            required
            placeholder="  enter your items..."
          />{" "}
          >>
          <button id="submitBtn" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <button id="removeAllBtn" onClick={this.handleRemoveAll}>
          Remove All
        </button>
        

        <TodoItems
          individualItem={this.state.todoItems}
          handleRemoveOneItem={this.handleRemoveOneItem}
        />
      </div>
    );
  }
}
export default Todo;
