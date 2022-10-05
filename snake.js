console.log("Hello World!");
// this is a comment










/** REMOVE THIS LINE TO START THE CHAPTER
// 1 - variables


let score = 0;
console.log(score);

score = score + 5;
console.log(score);

// TODO: create a variable called "bonus" with value 10
//	 add bonus to score





































/**
// 2 - functions


function addPoint() {
    score = score + 1;
}

addPoint();
addPoint();
console.log(score);

// TODO: write a function "subtractPoint()"





































/**
// 3 - canvas (coordinate system)


let canvas = document.getElementById("snake").getContext("2d");
let width = 608;
let height = 608;
let imageSize = 32;

canvas.drawImage(IMG.food, 288, 288);

// TODO: draw an apple in each corner





































/**
// 4 - objects

let snake = {
    x : 9,
    y : 10
};
console.log("snake", snake);
console.log("snake X", snake.x);

drawBox(snake.x, snake.y);

// TODO: create a variable called "snake2" with an object having coordinates 15 | 10
//	 call drawBox with the coordinates from the snake2 object






































/**
// 5 - If Conditions

let value = 5
if (value == 5) {
  console.log("is five");
} else {
  console.log("not five");
}


// TODO: write an if statement that does console.log("high") if value is larger than 4


// TODO: write an if statement that does console.log("high") if value is smaller than 4





































/**
// 6 - Keyboard events / user interaction / moving the snake


document.addEventListener("keydown", keyPressed);
// whenever a key is pressed, the browser calls our function "keyPressed"


function keyPressed(event) {
    let key = event.keyCode;
    let direction;
    
    if(key == 37) {
        direction = "LEFT";
    } else if(key == 38) {
        direction = "UP";
    } else if(key == 39) {
        direction = "RIGHT";
    } else if(key == 40) {
        direction = "DOWN";
    }
    
    console.log(direction);
    clearCanvas();
    moveSnake(direction);
    drawBox(snake.x, snake.y);
}


// TODO: in the function below, add code to change the snake position for direction UP / RIGHT / DOWN

function moveSnake(direction) {
    if(direction == "LEFT") {
        snake.x = snake.x - 1;
    }
}





// TODO: write a function detectColission()
//	 call detectCollission() at the end of moveSnake() above
//	 write code for detectCollision() to notice when the snake is outside of the game field





























/**
// 5 - arrays & loops

let exampleArray = [1, 5, 6];
console.log("exampleArray", exampleArray);

// adding an element to the list
exampleArray.push(7);
console.log("exampleArray after 'push'", exampleArray);

// using a for-loop to log each element of the array
for (let element of exampleArray) {
  console.log(element);
}


// TODO: create a variable called "myNumbers" and make it an array with two numbers


// TODO: add one more number using "push"


// TODO: write a loop to console.log each of your numbers





// TODO: create an array called "snakeParts"























/*
*/
