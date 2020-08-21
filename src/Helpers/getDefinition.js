const getDefinition = word => {
    return fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=dd8ba632-20cd-4ef7-a024-7f11b698c13d`)
        .then(res => { return res.json() })
        .then(def => { return { partOfSpeech: def[0].fl, definition: def[0].shortdef } })
        .catch(err => { alert("Error upon loading the definition. Please check console"); console.error(err) })

}

export default getDefinition;
