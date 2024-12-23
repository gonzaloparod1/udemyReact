import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { heroes } from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: "DC" })

        // console.log(hero)
    });

    test('getHeroeById debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);
        //console.log(hero)

        expect(hero).toBeFalsy();


    });

    // Tarea

    test('getHeroesByOwner debe de regresar heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))

    });

    test('getHeroesByOwner debe de regresar heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);

        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))

    });
    // Debe de retornar un arreglo con los heroes de DC
    // Length === 3
    // toEqual 

    // debe de retornar un arreglo con los heroes de Marvel
    // length === 2

});