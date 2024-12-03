const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 555555,
        lat: 14.2323,
        lng: 34.9345

    }

};

// console.table(persona);

// console.log(persona);

const persona2 = {...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2)