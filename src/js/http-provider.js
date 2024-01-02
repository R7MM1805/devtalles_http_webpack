const jokeURL = 'https://api.chucknorris.io/jokes/random';

const getJoke = async () => {
    try {
        const response = await fetch(jokeURL);
        if(!response.ok) throw 'No se pudo realizar la petición';
        const { icon_url, id, value } = await response.json();
        return { icon_url, id, value }; 
    } catch (error) {
        throw error;
    }
}

export {
    getJoke
}