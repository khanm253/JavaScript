const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

let keys = {
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false,
};

startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);


function start(){
    //console.log('clicked')
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