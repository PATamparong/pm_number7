import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  state = {
    listitems: [
      {
        firstname: "Juan",
        lastname: "De la Cruz",
        age: 21
      },
      {
        firstname: "Mark",
        lastname: "Paul",
        age: 21
      },
      {
        firstname: "Juan",
        lastname: "De la Cruz",
        age: 21
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Iterating List:</h1>
        <ul>
          {this.state.listitems.map((item, index) => (
            <li key={index}>
              {item.firstname + " " + item.lastname + " | " + item.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
