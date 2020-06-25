import React, { Component } from "react";
import shortid from 'shortid'
import hangmanImages from '../Helpers/hangmanImages';
import handleGuessedWord from '../Helpers/handleGuessedWord';
import handleOnClick from '../Helpers/handleOnClick';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: hangmanImages()
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: "apple"
    };
  };

  /** guessedWord: show current-state of word:
    - if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord = () => { return handleGuessedWord(this) };

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess = (e) => { handleOnClick(e, this) };

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={shortid.generate()}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >{ltr}</button>
    ));
  }

  render() {
    console.log(this.state)
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt="Hangman"/>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <p className='Hangman-btns'>{this.generateButtons()}</p>
      </div>
    );
  }
}

export default Hangman;
