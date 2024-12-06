const apiKey = '4q72zeqIyQ6wH0sSWVX0pWWEob5DAQmC';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(url)
    })
    .catch(console.warn);

// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//         console.log(data.images.original.url)
//     })
//     .catch(console.warn);

// peticion.then(resp => {
//         resp.json().then(data => {
//             console.log(data)
//         });

//     })
//     .catch(console.warn);