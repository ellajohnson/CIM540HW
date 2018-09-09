var x = 150;
var y = 50;
var d = 50;
var s = 30;
function setup() {
  createCanvas(800, 400);
  background(204);

}

function draw() {
  rect(x, y, s, s);
  rect(x + s + d, y, 2 * s, 2 * s);
  rect((x + s +d) + (2 * s) +d, y, 3 * s, 3 * s);

}
