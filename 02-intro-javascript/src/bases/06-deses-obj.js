// Desestructuración
// Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
}

// const { edad, clave, nombre, } = persona;

//  console.log(nombre);
//  console.log(edad);
//  console.log(clave);

// const {nombre:nombre2 } = persona;

// console.log( nombre2)

const retornaPersona = ({ clave, nombre, edad, rango = 'Capitan', }) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.1233,
            lng: -12.3232
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona(persona);

// const { nombreClave, anios, latlng } = retornaPersona(persona);

// const { lat, lng } = latlng

console.log(nombreClave, anios)
console.log(lat, lng);

//  console.log(nombre, edad, rango);