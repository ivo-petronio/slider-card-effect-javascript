const container = document.querySelector(".container");
const bgGreenButton = document.querySelector("#bg-green-button");

bgGreenButton.addEventListener("click", () => {
    container.classList.toggle("change");
})