var backdrop;
var maoi1;
var maoi2;
var maoi3;
var maoi4;
var maoi5;
var maoi6;

function setup() {
  createCanvas(900, 500);
  angleMode(DEGREES);
  background(0);
  backdrop = loadImage('maoi.jpg');
  maoi1 = new Maoi(0, 10, 100, 200);
  maoi2 = new Maoi(230, 100, 80, 180);
  maoi3 = new Maoi(380, 130, 70, 160);
  maoi4 = new Maoi(550, 220, 60, 140);
  maoi5 = new Maoi(710, 240, 50, 120);
  maoi6 = new Maoi(840, 270, 40, 100);
}
function draw() {
  background(0);
  image(backdrop, 0, 0);
  noStroke();
  maoi1.make();
  maoi2.make();
  maoi3.make();
  maoi4.make();
  maoi5.make();
  maoi6.make();
}

function Maoi(initX, initY, sizeW, sizeH) {
  this.x = initX;
  this.y = initY;
  this.sizeW = sizeW;
  this.sizeH = sizeH;
  this.make = function() {
    fill(204);
    rect(this.x, this.y, this.sizeW, this.sizeH);
    triangle(this.x + this.sizeW, this.y + (this.sizeH - (this.sizeH/1.667)), this.x + (this.sizeW + (this.sizeW/2.5)), this.y + (this.sizeH - (this.sizeH/2.857)), this.x + this.sizeW, this.y + (this.sizeH - (this.sizeH/4)));
    fill(0);
    ellipse(this.x + (this.sizeW - (this.sizeW/5)), this.y + (this.sizeH - (this.sizeH/1.25)), this.sizeW/5, this.sizeH/10);
  }
}
