function setup() {
  createCanvas(800, 400);
  background(204);

}

function draw() {
  fill(240, 30, 100);
  //left leg
  noStroke();
  rect(90, 170, 20, 30);
  triangle(90, 190, 100, 200, 110, 190);
  fill(204);
  triangle(95, 195, 90, 200, 100, 200);
  triangle(105, 195, 100, 200, 110, 200);
  //right leg
  fill(240, 30, 100);
  rect(150, 170, 20, 30);
  triangle(150, 190, 160, 200, 170, 190);
  fill(204);
  triangle(155, 195, 150, 200, 160, 200);
  triangle(165, 195, 160, 200, 170, 200);
  //body
  fill(240, 30, 100);
  ellipse(130, 130, 120, 120);
  stroke(0);
  ellipse(160, 110, 20, 20);
  ellipse(100, 140, 20, 20);
  ellipse(150, 160, 20, 20);
  //head
  fill(255, 0, 0);
  noStroke();
  triangle(80, 60, 130, 120, 180, 60);
  triangle(95, 40, 80, 60, 110, 60);
  triangle(130, 20, 110, 60, 150, 60);
  triangle(165, 40, 150, 60, 180, 60);
  stroke(0);
  ellipse(115, 75, 10, 10);
  ellipse(145, 75, 10, 10);
  noStroke();
  fill(240, 30, 100);
  triangle(130, 100, 120, 110, 140, 110);
  triangle(120, 110, 130, 120, 140, 110);

}
