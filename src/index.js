// import {whisper} from './voices.js'
// import {shout} from './voices.js'

import voices from './voices.js';

const randNum = Math.random() * 2;
let inputName = window.prompt("Enter your name");

console.log(`Hello, ${inputName}`);

if(randNum > 1) {
    console.log(voices.whisper("Don't speak loudly in the library. Whisper only"));
} else {
    console.log(voices.shout("We're at the beach. Yelling is acceptable"));
}

/* --------------------------------------------------------------------- */

function displayGif() {
    const searchInput = document.getElementById("search-text");

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ZrXfRz4rzjHIMOcNCiHHY0syRH5rRUu4&s=${searchInput.value}`, {mode: "cors"})
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        const gif = document.getElementById("gif");
        gif.src = data.data.images.original.webp;
    })
    .catch((error) => console.error(error));
}

const search = document.getElementById("search");
search.addEventListener("click", displayGif);