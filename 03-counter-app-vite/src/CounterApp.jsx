
import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(0);
    
    const handleAdd = () => {
        // console.log(event);
        // setCounter(counter + 1);
        // setCounter((c) => c + 1)
        setCounter(counter + 1);
        
    }

    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    return (
    <>
    <h1>CounterApp</h1>
    {/* <h2>{(newMessage.title)}</h2> */}
    {/* {<code>{JSON.stringify (newMessage)}</code>} */}
    <p>{counter}</p>

    <button onClick={ (event) => handleAdd(event, 'hola')}>
            +1</button>
    <button onClick={handleSubstract} >
            -1</button>
    <button onClick={handleReset} >
            Reset</button>
    </>
)
}   

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}