export const getImagen = async () => {
    try {
        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        // Verifica si 'data' y 'data.images' existen antes de acceder a 'original.url'
        if (!data || !data.images || !data.images.original) {
            throw new Error('La respuesta de la API no tiene la estructura esperada');
        }

        // Ahora se puede acceder de forma segura a la URL
        const url = data.images.original.url;
        return url;

    } catch (error) {
        // Manejo del error
        console.error(error);
        return 'No se encontró la imagen';
    }
};
