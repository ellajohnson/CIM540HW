var circX = 100;
var circY = 100;
var circD = 20;
var rectX = 30;
var rectY = 200;
var rectW = 30;
var rectH = 10;
var linesX1 = 400;
var linesY1 = 500;
var linesX2 = 0;
var linesY2 = 400;
function setup() {
  createCanvas(800, 800);
  background(204);
  noFill();
}

function draw() {
  for(var i = 1; i<7; i++) {
    ellipse(circX, circY, circD * i, circD * i);
    for(var j =1; j<7; j++) {
      ellipse(circX + 150, circY, circD * j, circD * j);
    }
  }
  fill(255);
  for(var n = 0; n<111; n+=10) {
    rect(rectX + (3*n), rectY + n, rectW, rectH);
  }
  noFill();
  for(var l = 0; l<800; l+=40) {
    for(var p = 0; p<240; p+=40) {
        line(linesX1, linesY1, linesX2 + l, linesY2 + p);
        ellipse(linesX2 + l, linesY2 + p, 10, 10);
    }
  }
}
