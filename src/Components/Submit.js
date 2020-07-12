import React, { Component } from 'react'

class Submit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            name: ''
        }
    }

    componentDidMount() {
        this.setState({ score: this.props.score, name: '' })
    }

    handleChange = e => {
        this.setState({ score: this.props.score, name: e.target.value })
    }

    handleSubmit = e => {

        // post request to high scores api not yet deployed
        // /hangman/postscore/:name/:score
        fetch(`/hangman/postscore/${this.state.name}/${this.state.score}`, {
            method: 'POST'
        })
            .then(() => {
                this.setState({ score: 0, name: '' }, () => {
                    this.props.restartGame()
                })
            })
            .catch(e => { console.error('Error upon submitting score: ', e) })
    }

    render() {
        return (
            <div>
                <form>

                    <input
                        type='text'
                        maxLength={10}
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />

                    <input value={this.state.score} />

                    <button
                        onClick={this.handleSubmit}
                    >SUBMIT SCORE</button>

                </form>
            </div>
        )
    }
}

export default Submit;