import React, { Component } from "react";
import Todo from "./Todo";
import Header from "./Header";
import "./Todo.css";
class Likes extends Component {
  // ------here we use state---Note: state uses object, key:value pair style-| state just the way it sound,
  state = { likes: 0 };

  // increaseLikes = () => this.setState(prevState => ({ likes: prevState.likes + 1 }));
  increaseLikes = () => this.setState({ likes: this.state.likes + 1 });

  decreaseLikes = () => {
    // ------this if condition helps to stop the "decreaselikes not to get neg values like -1"
    if (this.state.likes !== 0)
      // this.setState(prevState => ({ likes: prevState.likes - 1 }))
      this.setState({ likes: this.state.likes - 1 });
  };

  // resetLikes = () => this.setState(prevState => ({ likes: prevState.likes = 0 }));
  // -----because the state uses object method, we used that influence here with the setState method, unlike the other "buttons"-----
  resetLikes = () => this.setState({ likes: 0 });

  // -------------Everything i want to display in this page must be rendered----
  render() {
    return (
      <div>
        <Header title="THIS IS MY LIKES APP HEADER" />
        {/* <h1>Welcome to my Likes App</h1> */}
        <h1></h1>
        <h3> Likes: {this.state.likes} </h3>

        <button onClick={this.increaseLikes}> Like </button>

        <button onClick={this.decreaseLikes}> Unlike </button>

        <button onClick={this.resetLikes}> Reset </button>
        <br />
        <Todo />
      </div>
    );
  }
}
export default Likes;
