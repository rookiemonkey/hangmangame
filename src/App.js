import React, { Component } from "react";
import ReactHowler from 'react-howler'
import Home from './components/Home';
import Hangman from "./components/Hangman";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { start: false }
  }

  startGame = () => {
    this.setState({ start: true })
  }

  restartGame = () => {
    this.setState({ start: false })
  }

  render() {
    return (
      <div className="App">

        <ReactHowler
          src={require('./assets/audio/audio.mp3')}
          playing={true}
          loop={true}
        />

        {
          this.state.start
            ? <Hangman restartGame={this.restartGame} />
            : <Home start={this.startGame} />
        }

      </div>
    );
  }
}

export default App;
