import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         resolve(heroe);
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         reject('No se pudo encontrar el heroe');
//     }, 2000)
// });

// promesa.then((heroe) => {
//         console.log('heroe', heroe)
//     })
//     .catch(err => console.warn(err));

// const getHeroeByIdAsync = (id) => {
//     const promesa = new Promise((resolve, reject) => {

//         setTimeout(() => {
//             const heroe = getHeroeById(2);
//             console.log(heroe);
//             resolve(heroe);
//         }, 2000)
//     });

//     return promesa
// }

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe')
            }
            // console.log(p1);
            // resolve(heroe);
        }, 2000)
    });

}


getHeroeByIdAsync(1)
    .then(console.log)
    //.then(heroe => console.log('Heroe', heroe))
    .catch(console.warn)
    //.catch(err => console.warn(err))