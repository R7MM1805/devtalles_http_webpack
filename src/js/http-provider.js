const jokeURL = 'https://api.chucknorris.io/jokes/random';

const getJoke = async () => {
    const response = await fetch(jokeURL);
    
}

export {
    getJoke
}