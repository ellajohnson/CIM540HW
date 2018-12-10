//Loading screen variables
var backgrounds;
var button;
var button2;
var button3;
var button4;

var count = 0;
var loading = 1;
var gameOn = 0;

//Game variables
var music;

var background1;
var background2;
var backX = 0;
var sebastian = [];
var avatar;
var sebY = 440;
var curIndex = 0;
var duck = [];
var duckX = 230;
var score = 0;
var turnover = [];
var turnoverX = 290;
var upDown;

//Collision check variables
var avatarRight;
var avatarBottom;
var gap;


function preload() {
  //Loading screen images
  sebastian1 = loadImage('sebastian.png');
  sebastian2 = loadImage('sebastian2.png');
  //Game images
  background1 = loadImage('background.png');
  background2 = loadImage('background2.png');
  sebastian[0] = loadImage('sebastian.png');
  sebastian[1] = loadImage('sebastian2.png');
  duck = loadImage('duck.png');
  turnoverChain = loadImage('turnover.png');

  music = loadSound('Miami U 8bit.mp3');

}
function setup() {
  createCanvas(1000, 600);
  frameRate(5);

  music.loop();
  button = createButton('ORANGE');
  button.position(150, 500);
  button.style("padding", "10px");
  button.style("background-color", "#ff6600");
  button.style("color", "#ffffff");
  button.style("border-color", "#ffffff");
  button.style("font-weight", "bold");
  button.style("border-radius", "10px");
  button.style("font-size", "20px");
  button.mousePressed(OrangeSebastian);

  button2 = createButton('GREEN');
  button2.position(650, 500);
  button2.style("padding", "10px");
  button2.style("background-color", "#006600");
  button2.style("color", "#ffffff");
  button2.style("border-color", "#ffffff");
  button2.style("font-weight", "bold");
  button2.style("font-size", "20px");
  button2.style("border-radius", "10px");
  button2.mousePressed(GreenSebastian);
}
function draw() {
  if(loading == 1 && gameOn == 0) {
    loadingScreen();
    loading = 0;
  } else if (gameOn == 1) {
    currentTime = millis();
    if(currentTime < 45000) {
      runGame();
    } else if(currentTime > 45000) {
      endGame();
    }
  }
}
function loadingScreen() {
  background(0, 102, 0);

  image(sebastian1, 100, 200, 200, 250);
  image(sebastian2, 600, 200, 200, 250);

  textSize(45);
  fill(255, 102, 0);
  text('Choose Your Runner', 250, 100);
}
function GreenSebastian(){
  if (gameOn == 0) {
    background(255, 102, 0);
    image(sebastian2, 325, 100, 300, 350);
    button3 = createButton('NEXT');
    button3.position(900, 525);
    button3.style("padding", "10px");
    button3.style("background-color", "#006600");
    button3.style("color", "#ffffff");
    button3.style("border-color", "#ffffff");
    button3.style("font-weight", "bold");
    button3.style("font-size", "20px");
    button3.style("border-radius", "10px");
    button3.mousePressed(runGame);
    curIndex = 1;
  }
}
function OrangeSebastian(){
  if (gameOn == 0) {
    background(255, 102, 0);
    image(sebastian1, 325, 100, 300, 350);
    button4 = createButton('NEXT');
    button4.position(900, 525);
    button4.style("padding", "10px");
    button4.style("background-color", "#006600");
    button4.style("color", "#ffffff");
    button4.style("border-color", "#ffffff");
    button4.style("font-weight", "bold");
    button4.style("font-size", "20px");
    button4.style("border-radius", "10px");
    button4.mousePressed(runGame);
  }
}
function runGame() {
  gameOn = 1;
  fail = 0;
  over = 0;

  button.remove();
  button2.remove();

  //Level 1
  image(background1, backX, 0, 1200, 500);
  backX -= 10;
  //Level 2
  image(background2, backX + 1200, 0, 1200, 500);

  //Jumping
  if(keyIsDown(UP_ARROW)) {
    sebY -= 30;
  }
  if(keyIsDown(DOWN_ARROW)) {
    sebY += 30;
  }

  //Playable character
  avatar = new Sebastian(130, sebY, 20, 30);
  avatar.display();
  //Ducks
  duck[0] = new Duck(duckX, 440);
  duck[1] = new Duck((duckX + 250), 440);
  duck[2] = new Duck((duckX + 440), 440);
  duck[3] = new Duck((duckX + 550), 440);
  duck[4] = new Duck((duckX + 780), 440);
  duck[5] = new Duck((duckX + 1000), 440);
  duck[6] = new Duck((duckX + 1100), 440);
  duck[7] = new Duck((duckX + 1200), 420);
  duck[8] = new Duck((duckX + 1390), 440);
  duck[9] = new Duck((duckX + 1700), 350);
  duck[10] = new Duck((duckX + 1900), 440);
  for(i = 0; i < 11; i++) {
    duck[i].display();
  }
  duckX -= 10;
  //Turnover chains
  turnover[0] = new Turnover(turnoverX, 440, 255);
  turnover[1] = new Turnover((turnoverX + 70), 440);
  turnover[2] = new Turnover((turnoverX + 280), 440);
  turnover[3] = new Turnover((turnoverX + 410), 350);
  turnover[4] = new Turnover((turnoverX + 450), 350);
  turnover[5] = new Turnover((turnoverX + 490), 350);
  turnover[6] = new Turnover((turnoverX + 610), 440);
  turnover[7] = new Turnover((turnoverX + 645), 440);
  turnover[8] = new Turnover((turnoverX + 1000), 440);
  turnover[9] = new Turnover((turnoverX + 1290), 270);
  turnover[10] = new Turnover((turnoverX + 1350), 270);
  turnover[11] = new Turnover((turnoverX + 1590), 350);
  turnover[12] = new Turnover((turnoverX + 1680), 350);
  turnover[13] = new Turnover((turnoverX + 1800), 440);
  turnover[14] = new Turnover((turnoverX + 1870), 440);

  for(i = 0; i < 15; i++) {
    turnover[i].display();
  }
  turnoverX-=10;
  fill(255, 255);
  //Score
  text(score, 200, 40);
  score++;

  //Collision check for ducks
  var avatarRight = (avatar.x + avatar.width);
  var avatarBottom = (avatar.y + avatar.height);
  var gap = (duck[0].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > duck[0].x && avatar.x < (duck[0].x + 20)) {
    gameOver();
  }
  var gap = (duck[1].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > duck[1].x && avatar.x < (duck[1].x + 20)) {
    gameOver();
  }
  var gap = (duck[2].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > duck[2].x && avatar.x < (duck[2].x + 20)) {
    gameOver();
  }
  var gap = (duck[3].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > duck[3].x && avatar.x < (duck[3].x + 20)) {
    gameOver();
  }
  var gap = (duck[4].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > duck[4].x && avatar.x < (duck[4].x + 20)) {
    gameOver();
  }
  var gap = (duck[4].x + 20) - avatarRight;
 if(gap < 2 && avatarBottom > 440 && avatar.x > duck[4].x && avatar.x < (duck[4].x +20)) {
   gameOver();
 }
 var gap = (duck[5].x + 20) - avatarRight;
 if(gap < 2 && avatarBottom > 440 && avatar.x > duck[5].x && avatar.x < (duck[5].x +20)) {
   gameOver();
 }
 var gap = (duck[6].x + 20) - avatarRight;
 if(gap < 2 && avatarBottom > 440 && avatar.x > duck[6].x && avatar.x < (duck[6].x +20)) {
   gameOver();
 }
 var gap = (duck[7].x + 20) - avatarRight;
 if(gap < 2 && avatarBottom > 420 && avatarBottom < 455 && avatar.x > duck[7].x && avatar.x < (duck[7].x +20)) {
   gameOver();
 }
 var gap = (duck[8].x + 20) - avatarRight;
 if(gap < 2 && avatarBottom > 440 && avatar.x > duck[8].x && avatar.x < (duck[8].x +20)) {
   gameOver();
 }
 var gap = (duck[9].x + 20) - avatarRight;
 if(gap < 2 && avatarBottom > 350 && avatarBottom < 385 && avatar.x > duck[9].x && avatar.x < (duck[9].x +20)) {
   gameOver();
 }
 var gap = (duck[10].x + 20) - avatarRight;
 if(gap < 2 && avatarBottom > 440 && avatar.x > duck[10].x && avatar.x < (duck[10].x +20)) {
   gameOver();
 }

  //Collision check for turnover chains
  var gap = (turnover[0].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > turnover[0].x && avatar.x < (turnover[0].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text('+100', 100, 50);
  }
  var gap = (turnover[1].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > turnover[1].x && avatar.x < (turnover[1].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text('+100', 100, 50);
  }
  var gap = (turnover[2].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > turnover[2].x && avatar.x < (turnover[2].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text('+100', 100, 50);
  }
  var gap = (turnover[3].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom < 385 && avatarBottom > 350 && avatar.x > turnover[3].x && avatar.x < (turnover[3].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text('+100', 100, 50);
  }
  var gap = (turnover[4].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom < 385 && avatarBottom > 350 && avatar.x > turnover[4].x && avatar.x < (turnover[4].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text('+100', 100, 50);
  }
  var gap = (turnover[5].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom < 385 && avatarBottom > 350 && avatar.x > turnover[5].x && avatar.x < (turnover[5].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text('+100', 100, 50);
  }
  var gap = (turnover[6].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > turnover[6].x && avatar.x < (turnover[6].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text('+100', 100, 50);
  }
  var gap = (turnover[7].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > turnover[7].x && avatar.x < (turnover[7].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text('+100', 100, 50);
  }
  var gap = (turnover[8].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > turnover[8].x && avatar.x < (turnover[8].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text("+100", 100, 50);
  }
  var gap = (turnover[9].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 270 && avatarBottom < 305 && avatar.x > turnover[9].x && avatar.x < (turnover[9].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text("+100", 100, 50);
  }
  var gap = (turnover[10].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 270 && avatarBottom < 305 && avatar.x > turnover[10].x && avatar.x < (turnover[10].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text("+100", 100, 50);
  }
  var gap = (turnover[11].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 350 && avatarBottom < 385 && avatar.x > turnover[11].x && avatar.x < (turnover[11].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text("+100", 100, 50);
  }
  var gap = (turnover[12].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 350 && avatarBottom < 385 && avatar.x > turnover[12].x && avatar.x < (turnover[12].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text("+100", 100, 50);
  }
  var gap = (turnover[13].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > turnover[13].x && avatar.x < (turnover[13].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text("+100", 100, 50);
  }
  var gap = (turnover[14].x + 20) - avatarRight;
  if(gap < 2 && avatarBottom > 440 && avatar.x > turnover[14].x && avatar.x < (turnover[14].x + 20)) {
    score += 100;
    fill(255, 0, 0);
    text("+100", 100, 50);
  }
  //Restricting game area
  fill(255);
  rect(300, 0, 700, 600);
}
function Sebastian(initX, initY, height, width) {
  this.x = initX;
  this.y = initY;
  this.width = width;
  this.height = height;
  this.display = function() {
    image(sebastian[curIndex], initX, initY, height, width);
  }
}
function Duck(initX, initY) {
  this.x = initX;
  this.y = initY;

  this.display = function() {
    image(duck, this.x, this.y, 20, 35);
  }
}
function Turnover(initX, initY) {
  this.x = initX;
  this.y = initY;

  this.display = function() {
    image(turnoverChain, this.x, this.y, 20, 35);
  }
}
function restart() {
  gameOn = 1;
  runGame();
  backX = 0;
  score = 0;
  duckX = 230;
  turnoverX = 290;

  restartButton.remove();
  resetButton.remove();
}
function gameOver() {
  gameOn = 0;

  background(0);
  fill(255, 0, 0);
  text('Game Over', 35, 300);

}
function endGame() {
  gameOn = 0;

  background(0);

  text('Score', 430, 260);
  text(score, 450, 300);
}
