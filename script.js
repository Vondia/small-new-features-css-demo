const button = document.querySelector("#openButton");
const cardBody = document.querySelector(".card .body");

button.addEventListener("click", () => {
    cardBody.classList.toggle("show");
});

// pt. 3
// const button = document.querySelector("#toggleButton");
// const box = document.querySelector(".box");
// button.addEventListener("click", () => {
//     box.classList.toggle("show");
// });
