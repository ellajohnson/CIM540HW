var blue;
var darkBlue;
var orange;
var pink;
var red;
var tan;


function setup() {
  createCanvas(800, 400);
  fill(255);

}

function preload() {
  blue = loadImage('marilynblue.jpg');
  darkBlue = loadImage('marilyndarkblue.jpg');
  orange = loadImage('marilynorange.jpg');
  pink = loadImage('marilynpink.jpg');
  red = loadImage('marilynred.jpg');
  tan = loadImage('marilyntan.jpg');

}

function draw() {
background(255);
if (mouseY < 50) {
  image(blue, 20, 20);
}
  else if (mouseY < 100) {
    image(darkBlue, 20, 20);
  }
  else if (mouseY < 150) {
    image(orange, 20, 20);
  }
  else if (mouseY < 200) {
    image(pink, 20, 20);
  }
  else if (mouseY < 250) {
    image(red, 20, 20);
  }
  else if (mouseY < 300) {
    image(tan, 20, 20);
  }

}
