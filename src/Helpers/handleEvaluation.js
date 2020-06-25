const handleEvaluation = () => {
    const a = document.querySelector('#Hangman-word').innerText;
    const e = a.split('').every(l => { return l !== '_' });
    console.log(e);
}

export default handleEvaluation;