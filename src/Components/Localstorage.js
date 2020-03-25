import React, { Component } from "react";
class LocalStorage extends Component {
  render() {
    //NOTE: this kind of variable must be declared within render {but before return}
    const person = {
      name: "john_doe",
      age: 13
    };

    // convert to JSON object
    const personToJSON = JSON.stringify(person);
    // save it to localStorage
    localStorage.setItem("newPerson", personToJSON);

    // TO RETRIEVE ITEM
    // first get the item from localstorage
    const getPerson = localStorage.getItem("newPerson");
    //convert item to real object
    const personToParse = JSON.parse(getPerson);

    return (
      <div>
        The stringified version is
        <div>
          <strong>{localStorage.getItem("newPerson")}</strong>
        </div>
        After getting from locl storage we get
        <div>
          <strong>
            {personToParse.name} is {personToParse.age} years old
          </strong>
        </div>
      </div>
    );
  }
}
export default LocalStorage;
