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

/*
const newMessage = {
    message: 'Hola Mundo',
    title: 'Gonzalo' 
};
*/

const getResult = () => {
    return a + b;
}

export const FirstApp = () => {
    
    
    return (
    <>
        <h1>{getResult(2,3)}</h1>
        {/* {<code>{JSON.stringify (newMessage)}</code>} */}
        <p>Soy un subtitulo</p>
    </>
    )
}

