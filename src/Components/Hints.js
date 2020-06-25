import React from 'react';
import shortid from 'shortid';

const Hints = props => {

    const { definition, partOfSpeech } = props.definition;
    let defs; if (definition !== undefined) { defs = definition.map(d => { return ( <li key={shortid.generate()}>{d}</li> ) }) }

    if (!partOfSpeech && !definition ) { return null }
    else {

        return (

            <div>
                <h5>Hints:</h5>
                <ul>
                    <li key={shortid.generate()}>{ partOfSpeech }</li>
                    { defs }
                </ul>
            </div>

        )
    }
}

export default Hints;