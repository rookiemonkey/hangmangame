import React, { Component } from 'react';

class Home extends Component {

    handleStartGame = () => {
        this.props.start()
    }

    render() {
        return (
            <section className="Home-container">

                <div className="Home-heading-container">
                    <h1>Hangman</h1>
                    <img src={require('../assets/images/6.jpg')} alt="Hangman" />
                </div>

                <div className="Home-heading-container-text">

                    <p>
                        Hangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses. - Wikipedia
                    </p>

                    <p>
                        This one gives you a word to guess, as well as hints. You are given 6 tries in heart form <span className='heart'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="12" height="12" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
                        </span>
                        for each word.
                    </p>

                    <p>
                        Each time you get a correct answer, You will get 1pt. else, hangman will be drawn and you'll get only the correct answer upon losing your last heart. However, you can still proceed to the next word as long as you want.
                    </p>

                    <p>
                        upon ending the game, please take time to send us your score and first name and let see if you are on top of everyone elses who played the game.
                    </p>

                    <button
                        onClick={this.handleStartGame}
                    >Start</button>

                    <button
                        onClick={() => { alert('Coming soon') }}
                    >High Scores</button>
                    {/* API:  /hangman/score/highscores */}

                </div>

            </section>
        )
    }
}

export default Home;