var x = 60;
var y = 60;

function setup() {
  createCanvas(800, 400);

}

function draw() {
  background(0);
  fill(255);
  stroke(255);
  if(keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
      x -= 5;
    }
    else if(keyCode == RIGHT_ARROW) {
      x+= 5;
    }
    else if(keyCode == UP_ARROW) {
      y-= 5;
    }
    else if(keyCode == DOWN_ARROW) {
      y+= 5;
    }
    else if(key == "d") {
      line(x + 10, y, 800, y);
    }
  }
    rect(x, y, 10, 10);

}
