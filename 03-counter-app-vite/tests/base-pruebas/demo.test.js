// test('Esta prueba no debe de fallar', () => {

//     if (1 === 0) {
//         throw new Error('No puede dividir entre 0');
//     }

// })

describe('Pruebas en <DemoComponent/>', () => {

    test('Esta prueba no debe de fallar', () => {

        // 1. Inicializacion
        const message1 = 'Hola Mundo';

        // 2. Estimulo

        const message2 = message1.trim();

        // 3. Comportamiento

        expect(message1).toBe(message2);

    })

});