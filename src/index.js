const jokeURL = 'https://api.chucknorris.io/jokes/random';

console.time('Fetch1');
fetch(jokeURL).then(response => {
    response.json().then(({id, value}) => {
        console.log(id);
        console.log(value);
        console.timeEnd('Fetch1');
    });
});

console.time('Fetch2');
fetch(jokeURL).
    then(response => response.json()).
    then(({id, value}) => {
        console.log(id, value);
        console.timeEnd('Fetch2');
    });