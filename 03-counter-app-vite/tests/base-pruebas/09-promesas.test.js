import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un Héroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC',
                });
                done(); // Llama a done() si todo es correcto
            })
            .catch(done); // Maneja errores llamando a done con el error
    });

    test('getHeroeByIdAsync debe retornar un error si el héroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
});

