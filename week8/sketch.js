var angle = 0;
function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);

}

function draw() {
  background(204);
  translate(200, 200);
  strokeWeight(2);
  line(-100, 0, 100, 0);
  strokeWeight(10);
  rotate(angle);
  line(0, 0, 100, 300);
  angle += 5;
  pop();


}
