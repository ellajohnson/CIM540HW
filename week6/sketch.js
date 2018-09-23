
function setup() {
  createCanvas(800, 300);
  background(204);

}

function draw() {
  if (mouseX > 200 && mouseX < 270 && mouseY > 100 && mouseY < 170 && mouseIsPressed) {
    fill(255, 0, 0);
  }
  else {
    fill(255);
  }
  rect(200, 100, 70, 70);

  if (mouseX > 400 && mouseX < 470 && mouseY > 100 && mouseY <170 && mouseIsPressed) {
    fill(0, 255, 0);
  }
  else {
    fill(255);
  }
  rect(400, 100, 70, 70);
}
