const IMG = {
  ground: new Image(),
  food: new Image()
};
IMG.ground.src = "img/ground.png";
IMG.food.src = "img/food.png";

const AUDIO = {
  dead: new Audio("audio/dead.mp3"),
  eat: new Audio("audio/eat.mp3"),
  up: new Audio("audio/up.mp3"),
  right: new Audio("audio/right.mp3"),
  left: new Audio("audio/left.mp3"),
  down: new Audio("audio/down.mp3"),
};


const canvasWidth = 608;
const canvasHeight = 608;

function drawBox(x, y, empty = false) {
    let box = 32;
    canvas.fillStyle = empty ? "white" : "green";
    canvas.fillRect(x*box, y*box, box, box);
    
    canvas.strokeStyle = "red";
    canvas.strokeRect(x*box, y*box, box, box);
}

function clearCanvas() {
    canvas.clearRect(0, 0, canvasWidth, canvasHeight);
}

