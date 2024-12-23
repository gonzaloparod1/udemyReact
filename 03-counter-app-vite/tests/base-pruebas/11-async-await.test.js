import { getImagen } from "../../src/base-pruebas/11-async-await";	

    describe('Pruebas en 11-async-wait.js', () => { 
        
        test ('getImagen debe de retorna un error si no tenemos Api Key', async() => {
            
            const url = await getImagen();
            console.log(url)
            expect( typeof url).toBe('string');
        });
    });