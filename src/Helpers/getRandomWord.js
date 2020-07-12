import getDefinition from './getDefinition';

const getRandomWord = obj => {
    return fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(res => { return res.json() })
        .then(async word => {
            const definition = await getDefinition(word[0])
            return obj.setState({ ...obj.state, answer: word[0], definition: definition, isLoaded: true });
        })
        .catch(err => { alert("Error upon loading a word. Please see console"); console.error(err); });
}

export default getRandomWord;
