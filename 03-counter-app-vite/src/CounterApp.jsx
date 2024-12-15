import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

return (
<>
    <h1>CounterApp</h1>
    {/* <h2>{(newMessage.title)}</h2> */}
    {/* {<code>{JSON.stringify (newMessage)}</code>} */}
    <p>{value}</p>
</>
)
}   

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}