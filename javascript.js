const input = document.querySelector("input");
const accept = document.querySelector(".accept");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const options = document.querySelector(".options")
const clear = document.querySelector(".clear");

const black = document.querySelector(".black");
const white = document.querySelector(".white");
const gray = document.querySelector(".gray");
const rainbow = document.querySelector(".rainbow");

let color = "black";

black.addEventListener("click", ()=>{
    color = "black";
});

white.addEventListener("click", () => {
    color = "white";
});

gray.addEventListener("click", () => {
    color = "gray";
});

rainbow.addEventListener("click", ()=>{
    color = "random";
});

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

addGrid(16);

const divs = document.querySelectorAll(".colIn");

divs.forEach(div =>{
    div.addEventListener("mouseover", () =>{
        if(color !== "black" && color !== "white" && color !== "gray") color = random_rgba();
        div.style.background = color;
    })
})


//FUNCTIONS

function addGrid(n = input.value){ //n = input.value)
    for(let i = 0; i<n;i++){
        const outerDiv = document.createElement("div");
        outerDiv.classList.add("colOut");
        for(let j = 0; j<n;j++){
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("colIn");
            outerDiv.appendChild(innerDiv);
        }
        container.appendChild(outerDiv);
    }
}


clear.addEventListener("click", ()=>{
    divs.forEach(div => {
        div.style.background = "white";
    })
});

function deleteGrids(){
    container.textContent = "";
}

accept.addEventListener("click", () => {
    if(input.value > 100){
        alert("Too many grids! Please keep it below 101!");
        return;
    }
    deleteGrids();
    addGrid();
    const divs = document.querySelectorAll(".colIn");
    divs.forEach(div =>{
        div.addEventListener("mouseover", () =>{
            if(color !== "black" && color !== "white" && color !== "gray") color = random_rgba();
            div.style.background = color;
        })
    });

    clear.addEventListener("click", ()=>{
        divs.forEach(div => {
            div.setAttribute("style", "background: white");
        })
    });

});