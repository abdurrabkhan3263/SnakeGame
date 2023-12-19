// Game Constants & Variable
let inputDir = {x : 0 , y : 0};





// SELECTOR'S 
const board = document.querySelector('#board');
let snakeArr = [
    { x:13 , y : 15 }
]

let food = { x:5 , y : 5 }

// Constant & Variable
let lastPaintTime = 0
let speed = 2;



// Game Function

function main(ctime){
    window.requestAnimationFrame(main);//Ager Ham iss Ko Na Likhen To Sirf Ek Hi Baar Print Hoga Ya chaleg

    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}


function gameEngine(){
    // Part 1 : Updating the Snake Array

    // Pat2 : Render the Food of Snake
    // Render the Snake

    board.innerHTML = "";
    snakeArr.forEach((element,index)=>{
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = element.y;
        snakeElement.style.gridColumnStart = element.x;
        if(index === 0){
            snakeElement.classList.add('head')
        }else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement)
    })

    // Render the food

    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement)
}







// Main Logic Starts Here
window.requestAnimationFrame(main);


window.addEventListener('keydown' , e=>{
    inputDir = {x : 0 , y : 1}
    switch (e.key) {
        case "ArrowUp":
            console.log(e.key)
            break;
        case "ArrowDown":
            console.log(e.key)
            break;
        case "ArrowRight":
            console.log(e.key)
            break;
        case "ArrowLeft":
            console.log(e.key)
            break;
    
        default:
            break;
    }
})