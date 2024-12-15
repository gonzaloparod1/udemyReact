/*import { Fragment } from 'react';

export const FirstApp = () => {
return (
    <Fragment><h1>Gonzalo</h1>
    <p>Soy un subtitulo</p></Fragment>
    )
}
*/

/*
const newMessage = [1,2,3,4,5,6,7,8,9];

export const FirstApp = () => {

return (
    <><h1>{ newMessage }</h1>
    <p>Soy un subtitulo</p></>
    )
}
*/

// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'soy Gonzalo' 
// };


// const getResult = () => {
//     return a + b;
// }

    
    // console.log(props);

    // if (!title){
    //     throw new Error('El title no existe');
    // }
    
    import PropTypes from 'prop-types';

    export const FirstApp = ({title, subtitle, name}) => {

    return (
    <>
        <h1>CounterApp</h1>
        {/* <h2>{(newMessage.title)}</h2> */}
        {/* {<code>{JSON.stringify (newMessage)}</code>} */}
        <p> {value} </p>

    </>
    )
}


FirstApp.propTypes = {
    value: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Gonzalo Parodi',
    subtitle: 'No hay subtitulo',
    title: 'No hay titulo',
}