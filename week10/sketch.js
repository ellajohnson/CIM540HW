var x = 40;
var y = 0;
var speed = 5;
var gap = 70;
var cloudX = 0;
var cloudY = 0;
var b = 100;
var sunY = 500;
function setup() {
  createCanvas(600, 400);

}
function preload() {
  cloud = loadImage('cloud.png');
  sun = loadImage('sun.png');
}

function draw() {
  background(0, 0, b);
  image(cloud, cloudX - 100, cloudY, 150, 100);
  image(cloud, cloudX, cloudY, 150, 100);
  image(cloud, cloudX + 100, cloudY, 150, 100);
  image(cloud, cloudX + 200, cloudY, 150, 100);
  image(cloud, cloudX + 300, cloudY, 150, 100);
  image(cloud, cloudX + 400, cloudY, 150, 100);
  image(cloud, cloudX + 500, cloudY, 150, 100);

  image(sun, 150, sunY, 300, 100);
  currentTime = millis();
  if(currentTime < 5000) {
    stroke(255);
    strokeWeight(2);
    y += speed;
    line(x, y, x, y + 40);
    line(x + gap, y - 30, x + gap, y + 10 - 30);
    line(x + 2 * gap, y + 100, x + 2 * gap, y + 70 + 100);
    line(x + 3 * gap, y - 60, x + 3 * gap, y + 50 - 60);
    line(x + 4 * gap, y - 20, x + 4 * gap, y + 90 - 20);
    line(x + 5 * gap, y - 35, x + 5 * gap, y + 90 - 35);
    line(x + 6 * gap, y + 15, x + 6 * gap, y + 90 + 15);
    line(x + 7 * gap, y + 50, x + 7 * gap, y + 90 + 50);
    line(x + 8 * gap, y - 30, x + 8 * gap, y + 90 - 30);
    line(x + 9 * gap, y + 10, x + 9 * gap, y + 90 + 10);
    if( y > 400) {
      y = 0;
      speed = random(5, 15);
    }
  }
  if( currentTime > 5000) {
    cloudX -= 3;
    b += 1;
    if(sunY > 300) {
      sunY -= 1;
    }
  }
}
