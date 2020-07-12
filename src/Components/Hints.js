import React from 'react';
import shortid from 'shortid';

const Hints = props => {

    const { definition, partOfSpeech } = props.definition;
    let defs; if (definition !== undefined && definition.length > 0) {
        defs = definition.map(d => { return (<li key={shortid.generate()}>{d}</li>) })
    } else { defs = null }

    if (!partOfSpeech && !definition) {
        return (

            <div>
                <p>We apologize. Our sources do not have any available definition for this one</p>
            </div>

        )
    }

    else {

        return (

            <div>
                <h5>Hints:</h5>
                <ul>
                    <li key={shortid.generate()}>{partOfSpeech}</li>
                    {defs}
                </ul>
            </div>

        )
    }
}

export default Hints;