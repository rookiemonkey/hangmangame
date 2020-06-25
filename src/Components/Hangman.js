import React, { Component } from "react";
import Buttons from './Buttons';
import ButtonsDisabled from './ButtonsDisabled';
import Meta from './Meta';
import randomWord from '../Helpers/words';
import hangmanImages from '../Helpers/hangmanImages';
import handleGuessedWord from '../Helpers/handleGuessedWord';
import handleOnClick from '../Helpers/handleOnClick';
import handleEvaluation from '../Helpers/handleEvaluation';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: hangmanImages()
  };

  constructor(props) {
    super(props);
    this.state = {
      mWrong: this.props.maxWrong,
      nWrong: 0,
      guessed: new Set(),
      answer: "",
      winner: false
    };
  };

  componentDidMount() {
    this.setState({ ...this.state, answer: randomWord() });
  }

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
  generateButtons = () => { return Buttons(this); };

  /**
    evaluateAnswer: checks the asnwer if letters and no _ anymore
  */
  evaluateAnswer = () => { handleEvaluation(); }

  /**
    setGameOver: freezes the whole game when reaches the max wrong
  */
  setGameOver = () => { return ButtonsDisabled(); };

  /**
    setNewGame: resets the whole state of the application
  */
  setNewGame = () => { this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord(), winner: false }) }

  render() {

    const { nWrong, answer, mWrong } = this.state;
    const { images, maxWrong } = this.props;
    console.log(this.state)

    return (
      <div className='Hangman'>

        <h1>Hangman</h1>

        <img src={images[nWrong]} alt="Hangman"/>

        <Meta maxWrong={mWrong} numWrong={nWrong} setNewGame={this.setNewGame}/>

        <p className='Hangman-word' id='Hangman-word'>{ nWrong === maxWrong ? answer : this.guessedWord() }</p>

        <p className='Hangman-btns' id='Hangman-btns'>{ nWrong === maxWrong ? this.setGameOver() : this.generateButtons() }</p>

      </div>
    );
  }
}

export default Hangman;
