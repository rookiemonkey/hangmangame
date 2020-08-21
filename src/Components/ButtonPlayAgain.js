import React from 'react';

const ButtonPlayAgain = props => {
    return (

        <div>
            <button id="PlayAgain" onClick={props.setNewGame}>Play Again</button>
        </div>

    )
}

export default ButtonPlayAgain;
