import {render} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp';

// describe('Pruebas en <FirstApp />>', () => { 

    // test('debe hacer match con el snapshot', () => {
    //     const title = 'Hola soy Goku';
    //     const { container } = render (<FirstApp title={title}/>);
    //     expect( container ).toMatchSnapshot();

    // });
    
    test('debe mosrar el titulo en un h1', () => {
        
        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render (<FirstApp title={title}/>);
        expect(getByText(title)).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        // expect (getByTestId('test-title').innerHTML).toBe(title);
        expect (getByTestId('test-title').innerHTML).toContain(title);

    });

    test('debe mosrar el subtitulo enviado por props', () => {

        const title = 'Hola, soy Goku';
        const subtitle ='Soy un subtitulo';
        const {getAllByText} = render (<FirstApp title={title} subtitle={subtitle}/>);
        expect(getAllByText(subtitle).length).toBe(2);
    });
        





        // expect(h1.innerHTML).toBe(title);
//         expect(container).toMatchInlineSnapshot(`
// <div>
//   <h1>
//     Hola, soy Goku
//   </h1>
//   <p>
//     No hay subtitulo
//   </p>
//   <p>
//     Gonzalo Parodi
//   </p>
// </div>
// `);
        
