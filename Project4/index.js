const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let player = {
    speed: 5,
};

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
    let car = document.querySelector(".car");
    let road = gameArea.getBoundingClientRect();
    console.log(road)
    if(player.start){

        if(keys.ArrowUp && player.y > road.top){
            player.y -= player.speed;
        }
        if(keys.ArrowDown && player.y < (road.bottom - 50)){
            player.y += player.speed;
        }
        if(keys.ArrowLeft && player.x > 0){
            player.x -= player.speed;
        }
        if(keys.ArrowRight && player.x < (road.width - 50)){
            player.x += player.speed;
        }

        car.style.left = player.x + 'px';
        car.style.top = player.y + 'px';
        window.requestAnimationFrame(playGame);
    }

}


function start(){
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");
    player.start = true;
    window.requestAnimationFrame(playGame)
    let car = document.createElement("div");
    car.setAttribute("class", "car");
    car.innerText = "car";
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
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