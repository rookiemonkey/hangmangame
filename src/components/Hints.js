import React from 'react';
import shortid from 'shortid';

const Hints = props => {

    const { definition, partOfSpeech } = props.definition;
    let defs; if (definition !== undefined && definition.length > 0) {
        defs = definition.map(d => { return (<li key={shortid.generate()}>{d}</li>) })
    } else { defs = null }

    if (!props.isLoaded) {
        return (

            <div className="hints-container">
                <p>Please wait while we generate a random word for you to guess</p>

                <div className="loader" title="2">
                    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="40px" height="40px" viewBox="0 0 50 50" style={{ enableBackground: 'new 0 0 50 50' }} >
                        <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                            <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="0.6s"
                                repeatCount="indefinite" />
                        </path>
                    </svg>
                </div>
            </div>

        )
    }

    else if (!partOfSpeech && !definition) {
        return (

            <div className="hints-container">
                <p>We apologize. Our sources do not have any available definition for this one</p>
            </div>

        )
    }

    else {

        return (

            <div className="hints-container">
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
