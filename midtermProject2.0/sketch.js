var car;
var checker;
var carWidth = 100;
var x1 = -carWidth;
var speed1 = 10;
var x2 = -carWidth;
var speed2 = 5;
var x3 = -carWidth;
var speed3 = 7;
var button;
var r;
var g;
var b;
var t;

var score = 'Score:';
var counter = 0;

var button;

function setup() {
  createCanvas(1200, 500);

}
function preload() {
  car = loadImage('car.png');
  checker = loadImage('checker.jpg');

  var yellow = color(255, 255, 0);
  button = createButton('Reset score');
  button.position(0, 350);
  button.mousePressed(resetScore);
  button.style('background-color', yellow);
  button.style('border', 0);
}
function resetScore() {
  counter = 0;
}
function draw() {
  background(100);
  textSize(28);
  stroke(255, 255, 0);
  strokeWeight(7);
  for(l = 0; l < 1200; l += 140) {
    line(l, 140, l + 40, 140);
  }
  x1 += speed1;
  if(x1 > width + carWidth) {
    x1 = -carWidth;
  }
  image(car, x1, 240);

  x2 += speed2;
  if(x2 > width + carWidth) {
    x2 = -carWidth;
  }
  image(car, x2, 30);

  x3 += speed3;
  if(x3 > width + carWidth) {
    x3 = -carWidth;
  }
  image(car, x3, 150);

  image(checker, 1100, 0, 100, 300);

  strokeWeight(1);
  stroke(0);
  fill(r, g, b, t);
  rect(500, 0, 200, 300);

  noStroke();
  fill(255);
  rect(0, 300, 1200, 200);

  fill(0, 255, 0);
  ellipse(600, 400, 150, 150);

  if(mouseX > 525 && mouseX < 675 && mouseY > 325 && mouseY < 475 && mouseIsPressed) {
    r = 0;
    g = 255;
    b = 0;
    t = 50;
    if(x1 > 500 && x1 < 700) {
     counter++;
   } else if(x2 > 500 && x2 < 700) {
     counter++;
   } else if(x3 > 500 && x3 < 700) {
     counter++;
   }
  } else {
    r = 100;
    g = 100;
    b = 100;
    t = 100;
  }
  fill(0);
  text('Catch', 565, 410);
  text(counter, 90, 330);
  text(score, 0, 330);
}
