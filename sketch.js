let game;
function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  game = new Game();
}

function draw() {
  game.show();
}

function keyPressed() {
  //print(keyCode);
}
