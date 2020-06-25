const handleGuessedWord = obj => {

    console.log(obj.state)

    // convert the answer into an array
    const ans = obj.state.answer.split("");

    // iterate to the anwer and check if it has the letter
    // true: returns letter false: returns _
    // returns the array of letters & _
    return ans.map(ltr => (obj.state.guessed.has(ltr) ? ltr : "_"));

}

export default handleGuessedWord;