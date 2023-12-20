// Game Constants & Variable
let inputDir = {x : 0 , y : 0};
let highEval = 0;



// SELECTOR'S 
const board = document.querySelector('#board');
const realScore = document.querySelector('#rscore');
const hightScore = document.querySelector('#hscore');
let snakeArr = [
    { x:13 , y : 15 }
]
let score = 0;
let food = { x:5 , y : 5 }

// Constant & Variable
let lastPaintTime = 0
let speed = 10;



// Game Function
function main(ctime){
    window.requestAnimationFrame(main);//Ager Ham iss Ko Na Likhen To Sirf Ek Hi Baar Print Hoga Ya chaleg

    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(sarr){
    for(let i = 1 ; i < snakeArr.length; i++){
        if(sarr[i].x === sarr[0].x && sarr[i].y === sarr[0].y){
            return true;
        }
    }
    if(sarr[0].x >= 18 || sarr[0].x <=0 || sarr[0].y >= 18 || sarr[0].y <=0){
        return true;
    }
    // return false;
}

// HIGH SCORE FUNCTION
let high = localStorage.getItem('hScore');
if(high === null){
    highEval = 0
    localStorage.setItem('hScore' ,JSON.stringify(highEval));
}
else{
    highEval = localStorage.getItem('hScore');
    hightScore.innerHTML =  `Hi Score : ${JSON.parse(highEval)}`
}




function gameEngine(){
    // Part 1 : Updating the Snake Array
    if(isCollide(snakeArr)){
        speed = 10;
        highEval = score;
        inputDir = {x : 0 , y : 0};
        alert("Game Over Press Any Key To Play Again");
        snakeArr = [ { x:13 , y : 15 } ]
        score = 0
        realScore.textContent = `Score : ${score}`
    }

    // If Snake Eten The Food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){

        snakeArr.unshift({x : snakeArr[0].x + inputDir.x , y : snakeArr[0].y + inputDir.y});
        score += 1
        realScore.textContent = `Score : ${score}`
        let a = 2;
        let b = 16;
        food = {x : Math.round(a + (b - a)*Math.random()) , y : Math.round(a + (b - a)*Math.random())}
        if(score > highEval){
            highEval = score
            localStorage.setItem('hScore' , JSON.parse(highEval))
            hightScore.innerHTML = `Hi Score : ${highEval}`
        }
        speed += 0.3;
        if(speed > 15){
            speed = 15;
        }
    }

    // Moving The Snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = {...snakeArr[i]};
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
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
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;
    
        default:
            break;
    }
})