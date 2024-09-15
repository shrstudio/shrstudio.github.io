var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var tank = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  width: 50,
  height: 50,
  speed: 5
};

function drawTank() {
  context.fillStyle = "blue";
  context.fillRect(tank.x, tank.y, tank.width, tank.height);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
  clearCanvas();
  drawTank();
}

function handleKeyPress(e) {
  if (e.key === "ArrowLeft") {
    tank.x -= tank.speed;
  } else if (e.key === "ArrowRight") {
    tank.x += tank.speed;
  } else if (e.key === "ArrowUp") {
    tank.y -= tank.speed;
  } else if (e.key === "ArrowDown") {
    tank.y += tank.speed;
  }
}

function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", handleKeyPress);
gameLoop();