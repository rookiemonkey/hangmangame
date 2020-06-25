const handlePlayAgain = obj => {
  return fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then(res => { return res.json() })
      .then(word => { return obj.setState({ nWrong: 0, guessed: new Set(), answer: word[0], winner: false }); })
      .catch(err => { alert("Error upon loading a word. Please see console"); console.error(err); });
}

export default handlePlayAgain;