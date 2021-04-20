
// 
const numOfBall = 200;
const minBallSize = 20;
const maxBallSize = 60;
const boxWidth = 800;
const boxHeight = 600;
const boxBorderSize = 5;
const speed = 100; // Milliseconds
const color = [
  "#c0392b",
  "#e74c3c",
  "#d35400",
  "#e67e22",
  "#f39c12",
  "#f1c40f",
  "#27ae60",
  "#2ecc71",
  "#16a085",
  "#1abc9c",
  "#2980b9",
  "#3498db",
  "#8e44ad",
  "#9b59b6",
  "#2c3e50",
  "#34495e",
  "#7f8c8d",
  "#95a5a6",
  "#bdc3c7",
  "#ecf0f1"
];
var posX = [];
var posY = [];
var maxX = [];
var maxY = [];
var goUp = [];
var goLeft = [];
var moveX = [];
var moveY = [];

// --- Create HTML -- //
var box = document.createElement('div');
// var box = document.write('<div id="box"></div>');

// var attribId = document.createAttribute('id');
// attribId.value = "box";
// box.setAttributeNode(attribId);

//box.id = "box"; // Shortcut

box.setAttribute('id', 'box');
box.style.width =  boxWidth + "px";
box.style.height = boxHeight + "px";

// Balls
for (let i = 0; i < numOfBall; i++) {
  box.insertAdjacentHTML('beforeend', '<div class="circle"></div>');
}

document.body.appendChild(box);
const circle = document.getElementsByClassName("circle");

// -- Funtions -- //
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function frame(c, i) {
  // Move Y axis
  if (goUp[i]) {
    posY[i] -= moveY[i];
    c.style.top = posY[i] + "px";
    if (posY[i] < 0) {
			posY[i] = 0;
			goUp[i] = false;
		}
  }
  else {
    posY[i] += moveY[i];
    c.style.top = posY[i] + "px";
    if (posY[i] > maxY[i]) {
			posY[i] = maxY[i] - getRndInteger(1, 6 + 1);
			goUp[i] = true;
		}
  }
  
  // Move X axis
  if (goLeft[i]) {
    posX[i] -= moveX[i];
    c.style.left = posX[i] + "px";
    if (posX[i] < 0) {
			posX[i] = 0;
      goLeft[i] = false;
		}
  }
  else {
    posX[i] += moveX[i];
    c.style.left = posX[i] + "px";
    if (posX[i] > maxX[i]) {
			posX[i] = maxX[i] - getRndInteger(1, 6 + 1);
      goLeft[i] = true;
		}
  }
}

function init() {
  for (let i = 0; i < numOfBall; i++) {
		
		// Random Ball Size
		let ballSize = getRndInteger(minBallSize, maxBallSize + 1);
		circle[i].style.width = ballSize + "px";
		circle[i].style.height = ballSize + "px";
		
		// Random Color
    let colorId = getRndInteger(0, color.length + 1);
    circle[i].style.background = color[colorId];
		
		// Random Speed
		moveX[i] = getRndInteger(1, 8 + 1);
		moveY[i] = getRndInteger(1, 8 + 1);
		
		// Calulate MaxX and MaxY
		maxX[i] = boxWidth - (boxBorderSize * 2) - ballSize;
		maxY[i] = boxHeight - (boxBorderSize * 2) - ballSize;
		
		// Random Positon
    posX[i] = getRndInteger(0, maxX[i]);
    posY[i] = getRndInteger(0, maxY[i]);
    goUp[i] = getRndInteger(0, 1 + 1);
    goLeft[i] = getRndInteger(0, 1 + 1);
		
		// Smooth Transition
		circle[i].style.transition = "all linear " + speed + "ms";
		
		// Move the Balls
    setInterval(function() { frame(circle[i], i) }, speed);
  }
	
	// Check variables
  console.log(circle);
  console.log(posX);
  console.log(posY);
  console.log(goUp);
  console.log(goLeft);
}

init();