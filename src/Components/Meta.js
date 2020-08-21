import React from 'react';
import Heart from './Heart';

const Meta = props => {

    const { maxWrong, numWrong, setNewGame } = props;

    return (

        <div>

          { numWrong === maxWrong ? null : <h4>Lives</h4> }

          { numWrong === maxWrong ? null : <Heart lives={maxWrong - numWrong}/> }

          {
            numWrong === maxWrong
              ? (
                  <button
                    id="PlayAgain"
                    onClick={setNewGame}
                  >Play Again</button>
                )
              : null
          }

        </div>

    )
}

export default Meta;