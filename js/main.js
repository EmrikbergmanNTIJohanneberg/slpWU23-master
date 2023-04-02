let layer = document.querySelector(".fade-layer");
layer.addEventListener("click",showMenu)

let button = document.querySelector(".material-symbols-outlined");
button.addEventListener("click",showMenu)

function showMenu() {
    let menu = document.querySelector("div.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}