const handleEvaluation = obj => {
    const { mWrong, nWrong } = obj.state;

    if (mWrong !== nWrong) {
        const a = document.querySelector('#Hangman-word').innerText;
        const e = a.split('').every(l => { return l !== '_' });
        console.log(e);
    } else { return false };

}

export default handleEvaluation;