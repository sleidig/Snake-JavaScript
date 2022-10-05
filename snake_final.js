const canvas = document.getElementById("snake").getContext("2d");
let box = 32;

let snake = [];

snake[0] = {
    x : 9,
    y : 10
};

// create the food
let food = {
    x : Math.floor(Math.random()*17+1),
    y : Math.floor(Math.random()*15+3)
}

// create the score var
let score = 0;

//control the snake
let d;
document.addEventListener("keydown", keyPressed);
function keyPressed(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        AUDIO.left.play();
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        AUDIO.up.play();
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        AUDIO.right.play();
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        AUDIO.down.play();
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// draw everything to the canvas

function draw() {
    // draw all elements
    canvas.drawImage(IMG.ground, 0, 0);
    
    for(let s of snake) {
    	drawBox(s.x, s.y)
    }
    
    canvas.drawImage(IMG.food, food.x*box, food.y*box);
    
    
    
    
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= 1;
    if( d == "UP") snakeY -= 1;
    if( d == "RIGHT") snakeX += 1;
    if( d == "DOWN") snakeY += 1;
    
    
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        AUDIO.eat.play();
        food = {
            x : Math.floor(Math.random()*17+1),
            y : Math.floor(Math.random()*15+3)
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    
    
    // game over
    if(snakeX < 0 || snakeX > 17 || snakeY < 3 || snakeY > 17 || collision(newHead,snake)){
        clearInterval(game);
        AUDIO.dead.play();
    }
    
    snake.unshift(newHead);
    
    
    // draw score
    canvas.fillStyle = "white";
    canvas.font = "45px Changa one";
    canvas.fillText(score, 2*box, 1.6*box);
}

// call draw function every 150 ms
let game = setInterval(draw, 150);


















