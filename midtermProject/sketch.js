var brushCirc;
var brushRect;

var cSlider;
var rSlider;

var colorRed;
var colorOrang;
var colorYell;
var colorGreen;
var colorBlue;
var colorPurp;
var colorGray;
var colorBlk;
var colorWhite;

var w;
var r;
var g;
var b;
var shape;

var clear;

var circleImg;
var squareImg;



function setup() {
  createCanvas(1200, 600);
  background(255);

  clear = createButton('Clear');
  clear.position(1100, 30);
  clear.mousePressed(clearCanvas);

//Circle brush
  brushCirc = createButton('Circle');
  brushCirc.position(30, 30);
  brushCirc.mousePressed(drawCirc);

  cSlider = createSlider(0, 255, 10);
  cSlider.position(90, 30);

//Square brush
  brushRect = createButton('Square');
  brushRect.position(250, 30);
  brushRect.mousePressed(drawRect);

  rSlider = createSlider(0, 255, 10);
  rSlider.position(320, 30);


//Brushes to change color
  var red = color(255, 0, 0);
  colorRed = createButton('---');
  colorRed.position(500, 30);
  colorRed.mousePressed(drawRed);
  colorRed.style('background-color', red);
  colorRed.style('border', 0);


  var orange = color(255, 128, 0);
  colorOrang = createButton('---');
  colorOrang.position(540, 30);
  colorOrang.mousePressed(drawOrang);
  colorOrang.style('background-color', orange);
  colorOrang.style('border', 0);

  var yell = color(255, 255, 0);
  colorYell = createButton('---');
  colorYell.position(580, 30);
  colorYell.mousePressed(drawYell);
  colorYell.style('background-color', yell);
  colorYell.style('border', 0);

  var green = color(0, 255, 0);
  colorGreen = createButton('---');
  colorGreen.position(620, 30);
  colorGreen.mousePressed(drawGreen);
  colorGreen.style('background-color', green);
  colorGreen.style('border', 0);

  var blue = color(0, 0, 255);
  var white = color(255, 255, 255);
  colorBlue = createButton('---');
  colorBlue.position(660, 30);
  colorBlue.mousePressed(drawBlue);
  colorBlue.style('background-color', blue);
  colorBlue.style('border', 0);

  var purp = color(127, 0, 255);
  colorPurp = createButton('---');
  colorPurp.position(700, 30);
  colorPurp.mousePressed(drawPurp);
  colorPurp.style('background-color', purp);
  colorPurp.style('border', 0);

  var gray = color(128, 128, 128);
  colorGray = createButton('---');
  colorGray.position(740, 30);
  colorGray.mousePressed(drawGray);
  colorGray.style('background-color', gray);
  colorGray.style('border', 0);

  var blk = color(0, 0, 0);
  colorBlk = createButton('---');
  colorBlk.position(780, 30);
  colorBlk.mousePressed(drawBlk);
  colorBlk.style('background-color', blk);
  colorBlk.style('border', 0);

  var white = color(255, 255, 255);
  colorWhite = createButton('---');
  colorWhite.position(820, 30);
  colorWhite.mousePressed(drawWhite);
  colorWhite.style('background-color', white);
  colorWhite.style('border', 0);
}

function clearCanvas() {
  background(255);
}
//Functions with brush shapes
function drawCirc() {
  w = cSlider.value();
  shape = ROUND;
}
function drawRect() {
  w = rSlider.value();
  shape = SQUARE;
}
//Functions with brush colors
function drawRed() {
  r = 255;
  g = 0;
  b = 0;
}
function drawOrang() {
  r = 255;
  g = 128;
  b = 0;
}
function drawYell() {
  r = 255;
  g = 255;
  b = 0;
}
function drawGreen() {
  r = 0;
  g = 255;
  b = 0;
}
function drawBlue() {
  r = 0;
  g = 0;
  b = 255;
}
function drawPurp() {
  r = 127;
  g = 0;
  b = 255;
}
function drawGray() {
  r = 128;
  g = 128;
  b = 128;
}
function drawBlk() {
  r = 0;
  g = 0;
  b = 0;
}
function drawWhite() {
  r = 255;
  g = 255;
  b = 255;
}
function mouseDragged() {
  strokeWeight(w);
  strokeCap(shape);
  stroke(r,g,b);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function draw() {
  noStroke();
  fill(204);
  rect(0, 0, 1200, 80);

}
