const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let player = {};

let keys = {
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false,
};

startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function playGame(){
    console.log("inPlay");
    if(player.start){
        window.requestAnimationFrame(playGame);
    }

}


function start(){
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");
    player.start = true;
    window.requestAnimationFrame(playGame)
    let car = document.createElement("div");
    car.innerText = "car";
    gameArea.appendChild(car);
}

function pressOn(e){
    e.preventDefault();
    keys[e.key] = true; 
    console.log(keys)
}

function pressOff(e){
    e.preventDefault();
    keys[e.key] = false; 
    console.log(keys)
}