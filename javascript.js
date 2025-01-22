const input = document.querySelector("input");
const accept = document.querySelector(".accept");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const options = document.querySelector(".options")
const clear = document.querySelector(".clear");

addGrid(16);

const divs = document.querySelectorAll(".colIn");
// let n = input.value;



divs.forEach(div =>{
    div.addEventListener("mouseover", () =>{
        div.setAttribute("style", "background: black;");
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
        div.setAttribute("style", "background: white");
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
            div.setAttribute("style", "background: black;");
            console.log("does this work?");
        })
    });

    clear.addEventListener("click", ()=>{
        divs.forEach(div => {
            div.setAttribute("style", "background: white");
        })
    });
    
});