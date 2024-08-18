const containerEl = document.querySelector("#container");

function createDivs(num) {
    if (document.querySelector(".horizontal")) {
        containerEl.innerHTML = "";
    }
    else {
    }
    let size = 300/num;

    for(let i = 0; i < num; i++) {
        let horizontal = document.createElement("div");
        horizontal.classList.add("horizontal");
        containerEl.appendChild(horizontal);
        console.log("created horizontal");

        for(let x = 0; x < num; x++) {
            let gridBox = document.createElement("div");
            horizontal.appendChild(gridBox)
            gridBox.classList.add("gridBox")
            gridBox.style.width = size + "px"
            gridBox.style.height = size + "px"
            gridBox.style.opacity = 0
            gridBox.addEventListener("mouseover", () => {
                gridBox.style.backgroundColor = "pink";
                let currentOpa = Number(window.getComputedStyle(gridBox).getPropertyValue("opacity"));  
                gridBox.style.opacity = currentOpa + 0.2;

            })
            console.log("Created Div")


        }
    }
}
/*
function addEvents() {
    const gridBoxes = document.querySelectorAll(".gridBox");

    gridBoxes.forEach(Element => {
        Element.addEventListener('mouseover', () => {
            Element.classList.add("hover")}
        )
    })
}*/


const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener('click', () => {
    let gridSize = input.value;
    if(gridSize > 100) {
        let msg = window.prompt("Please pick a number less than 100.");
    }
    createDivs(gridSize);
    input.value = "";
    /*addEvents();*/
})

