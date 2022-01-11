const header = document.querySelector("header");

const navList = document.createElement("ul");
header.appendChild(navList);

const grid = document.getElementById("grid");

function makeGrid(size){
    document.querySelectorAll(".square").forEach(e => e.remove());
    grid.style.setProperty("--grid-size", size);

    for (let i = 0; i < size * size; i++){
        square = document.createElement("div");
        square.className = "square";
        grid.appendChild(square);
    }
}