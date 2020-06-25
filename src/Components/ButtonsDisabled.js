import React from 'react';
import shortid from 'shortid';

const ButtonsDisabled = () => {

    // conver the alphabeth into an array
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    // generate an array of buttons
    const buttons = alphabet.map(letter => (
        <button
            key={shortid.generate()}
            value={letter}
            disabled='true'
        >{letter}</button>
    ));

    // return the array of buttons
    return buttons;
}

export default ButtonsDisabled;