// const toaster = new Promise((resolve, reject) => {
//     let bread = "soft";
//     const heatedAmount = Math.random() * 5;

//     if(heatedAmount > 1 && heatedAmount < 4) {
//         bread = "toasted";
//         resolve(bread);
//     } else {
//         bread = "burnt";
//         reject(bread);
//     }
// });

// toaster
// .then((value) => console.log(value))
// .catch((error) => console.error(error));

// function startToast() {
//     return new Promise((resolve,reject) => {
//         let bread = "soft";
//         const heatedAmount = Math.random() * 5;

//         if(heatedAmount > 1 && heatedAmount < 4) {
//             bread = "toasted";
//             resolve(bread);
//         } else {
//             bread = "burnt";
//             reject(bread);
//         }
//     });
// }

// startToast()
// .then((value) => console.log(value))
// .catch((error) => console.error(error));

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