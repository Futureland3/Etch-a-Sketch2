const input = document.querySelector("input");
const accept = document.querySelector(".accept");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const options = document.querySelector(".options")
const clear = document.querySelector(".clear");

addGrid(16);

function addGrid(n = input.value){
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
    console.log(n);
}

function deleteGrids(){
    container.textContent = "";
}


const divs = document.querySelectorAll(".colIn");
accept.addEventListener("click", () => {
    deleteGrids();
    addGrid();
});

clear.addEventListener("click", ()=>{
    // css background = default color
});

console.log(innerDiv);
