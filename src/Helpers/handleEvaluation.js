const handleEvaluation = obj => {
    const { mWrong, nWrong } = obj.state;

    if (mWrong !== nWrong) {
        const a = document.querySelector('#Hangman-word').innerText;
        const e = a.split('').every(l => { return l !== '_' });
        if (e) { obj.setState({ ...obj.state, winner: true }) } else { return false }
    } else { return false };

}

export default handleEvaluation;