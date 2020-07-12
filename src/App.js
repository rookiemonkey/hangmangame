import React, { Component } from "react";
import Home from './Components/Home';
import Hangman from "./Components/Hangman";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { start: false }
  }

  startGame = () => {
    this.setState({ start: true })
  }

  render() {
    return (
      <div className="App">

        {
          this.state.start ? <Hangman /> : <Home start={this.startGame} />
        }

      </div>
    );
  }
}

export default App;
