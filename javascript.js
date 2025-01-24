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
const toggle = document.querySelector(".toggle");

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
        div.style.opacity = parseFloat(div.style.opacity) + 0.1;
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
            // innerDiv.style.opacity = 0.1;
            let op = false; //if true then opacity is on. If false, then it's off.
            outerDiv.appendChild(innerDiv);
        }
        container.appendChild(outerDiv);
    }
}

toggle.addEventListener("click", () => {
    if(toggle.value == "off"){
        divs.forEach(div => {
            toggleOn();
        });
        toggle.value = "on";
        toggle.textContent = "Turn Opacity Off";
    }
    else if(toggle.value == "on"){
        divs.forEach(div =>{
            toggleOff();
        });
        toggle.value = "off";
        toggle.textContent = "Turn Opacity On";
    }
});

function toggleOn(){
    divs.forEach(div =>{
        div.style.opacity = 0.1;
    });
};

function toggleOff(){
    divs.forEach(div =>{
        div.style.opacity = 1;
    });
};


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
    if(isNaN(parseInt(input.value))){
        alert("Enter a number");
        return;
    };

    console.log(parseInt(input.value));
    deleteGrids();
    addGrid();
    const divs = document.querySelectorAll(".colIn");
    divs.forEach(div =>{
        div.addEventListener("mouseover", () =>{
            if(color !== "black" && color !== "white" && color !== "gray") color = random_rgba();
            div.style.background = color;
            div.style.opacity = parseFloat(div.style.opacity) + 0.1;

        })
    });

    clear.addEventListener("click", ()=>{
        divs.forEach(div => {
            div.setAttribute("style", "background: white");
        })
    });

});