import React, { Component } from "react";
import Submit from './Submit';
import Hints from './Hints';
import Buttons from './Buttons';
import ButtonPlayAgain from './ButtonPlayAgain';
import ButtonsDisabled from './ButtonsDisabled';
import Meta from './Meta';
import getRandomWord from '../helpers/getRandomWord';
import getHangmanImages from '../helpers/getHangmanImages';
import handlePlayAgain from '../helpers/handlePlayAgain';
import handleGuessedWord from '../helpers/handleGuessedWord';
import handleOnClick from '../helpers/handleOnClick';
import handleEvaluation from '../helpers/handleEvaluation';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: getHangmanImages()
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      mWrong: this.props.maxWrong,
      nWrong: 0,
      guessed: new Set(),
      answer: "",
      definition: {},
      winner: false,
      end: false,
      score: 0
    };
  };

  componentDidMount() { getRandomWord(this) }

  /** guessedWord: show current-state of word:
    - if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord = () => { return handleGuessedWord(this); };

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess = (e) => { handleOnClick(e, this); setTimeout(() => { this.evaluateAnswer(); }, 100) };

  /**
    generateButtons: return array of letter buttons to render
  */
  generateButtons = () => {
    if (this.state.isLoaded) { return Buttons(this) }
    else { return ButtonsDisabled(this) }
  };

  /**
    evaluateAnswer: checks the asnwer if letters and no _ anymore
  */
  evaluateAnswer = () => { handleEvaluation(this); }

  /**
    setGameOver: freezes the whole game when reaches the max wrong
  */
  setGameOver = () => { return ButtonsDisabled(); };

  /**
    setNewGame: resets the whole state of the application
  */
  setNewGame = () => {
    this.setState({ ...this.state, isLoaded: false }, () => {
      this.setState(handlePlayAgain(this))
    })
  }

  render() {

    const { nWrong, answer, mWrong, winner, definition, end, score, isLoaded } = this.state;
    const { images, maxWrong, restartGame } = this.props;

    return (
      <div className='Hangman'>

        <div>
          <h1>Hangman</h1>
          <img src={images[nWrong]} alt="Hangman" />
        </div>

        <div style={{ width: '500px' }}>
          <Hints definition={definition} isLoaded={isLoaded} />

          {end
            ? <Submit score={score} restartGame={restartGame} />
            : null
          }

          {winner
            ? <h2>Correct!</h2>
            : null
          }

          <div>SCORE: {this.state.score}</div>

          {winner
            ? <ButtonPlayAgain setNewGame={this.setNewGame} />
            : <Meta maxWrong={mWrong} numWrong={nWrong} setNewGame={this.setNewGame} />
          }

          <p
            className='Hangman-word'
            id='Hangman-word'
          >{nWrong === maxWrong ? answer : this.guessedWord()}</p>

          <p
            className='Hangman-btns'
            id='Hangman-btns'
          >{nWrong === maxWrong || winner ? this.setGameOver() : this.generateButtons()}</p>
        </div>

      </div>
    );
  }
}

export default Hangman;
