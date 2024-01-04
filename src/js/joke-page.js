import { getJoke } from "./http-provider";

const body = document.body;
let btnAnotherJoker;
let olJokes;
let count = 1;
const createJokeHTML = () => {
    const html = `
        <h1 class="mt-5">Jokes</h1>
        <hr>
        <button id='btnAnotherJoke' class="btn btn-primary">Another Joke</button>
        <ol id='olJokes' class="mt-2 list-group">
        </ol>
    `;
    const dvJoke = document.createElement('div');
    dvJoke.innerHTML = html;
    body.append(dvJoke);
}

const createEvents = () => {
    btnAnotherJoker = document.querySelector('#btnAnotherJoke');
    olJokes = document.querySelector('#olJokes');
    btnAnotherJoker.addEventListener('click', async (event) => {
        btnAnotherJoker.disabled = true;
        addJoke(await getJoke());
        btnAnotherJoker.disabled = false;
        count++;
    });
}

const addJoke = (joke) => {
    const liJoke = document.createElement('li');
    liJoke.classList.add('list-group-item');
    liJoke.innerHTML = `${count} - ${joke.id} : ${joke.value}`;
    olJokes.append(liJoke);
}

const init = () =>{
    createJokeHTML();
    createEvents();
}

export {
    init
}