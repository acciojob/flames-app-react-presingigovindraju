import React, { useState } from "react";
import '../styles/App.css';

function App() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'input1') {
            setInput1(value);
        } else if (name === 'input2') {
            setInput2(value);
        }
    };

    const calculateRelationship = () => {
        if (input1.trim() === '' || input2.trim() === '') {
            setRelationshipStatus('Please Enter valid input');
            return;
        }

        let string1 = input1;
        let string2 = input2;

        // Remove common characters
        for (let char of input1) {
            if (string2.includes(char)) {
                string1 = string1.replace(char, '');
                string2 = string2.replace(char, '');
            }
        }

        const remainingLength = (string1.length + string2.length) % 6;

        switch (remainingLength) {
            case 1:
                setRelationshipStatus('Friends');
                break;
            case 2:
                setRelationshipStatus('Love');
                break;
            case 3:
                setRelationshipStatus('Affection');
                break;
            case 4:
                setRelationshipStatus('Marriage');
                break;
            case 5:
                setRelationshipStatus('Enemy');
                break;
            case 0:
                setRelationshipStatus('Siblings');
                break;
            default:
                setRelationshipStatus('Error');
        }
    };

    const clearInputs = () => {
        setInput1('');
        setInput2('');
        setRelationshipStatus('');
    };

    return (
        <div id="main">
            <input
                type="text"
                name="input1"
                value={input1}
                onChange={handleInputChange}
                data-testid="input1"
            />
            <input
                type="text"
                name="input2"
                value={input2}
                onChange={handleInputChange}
                data-testid="input2"
            />
            <button onClick={calculateRelationship} data-testid="calculate_relationship">Calculate Relationship Future</button>
            <button onClick={clearInputs} data-testid="clear">Clear</button>
            <h3 data-testid="answer">{relationshipStatus}</h3>
        </div>
    );
}

export default App;
