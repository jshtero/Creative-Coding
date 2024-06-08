//Sets Multiple Variables
let gameStart = "title";
let character;
let pollen = [];
let points = 0;
let timer = 120;
let startTime;
let intervalId;
let bgImage;
//Preloads the background image for the game
function preload() {
  bgImage = loadImage('flower.jpeg');
}
//Creates the canvas and character
function setup() {
  createCanvas(windowWidth, windowHeight);
  character = new Character();
}
//Draws background Image
function draw() {
  image(bgImage, 0, 0, width, height);
//Title screen with if else statements
  if (gameStart === "title") {
    drawTitleScreen();
  } else if (gameStart === "playing") {
    playGame();
  } else if (gameStart === "win") {
    drawWinScreen();
  } else if (gameStart === "lose") {
    drawLoseScreen();
  }
}
//Draws the styled title screen
function drawTitleScreen() {
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(0);
  textFont("Arial Black");
  text("Pollen Land", width / 2, height / 2 - 50);
  textSize(40);
  text("Press ENTER to Start", width / 2, height / 2 + 50);
}
//Starts the game and starts the timer
function playGame() {
  let elapsed = millis() - startTime;
  timer = 120 - floor(elapsed / 1000);
//Shows the character
  character.move();
  character.show();
//Randomizes the flower placement
  for (let i = pollen.length - 1; i >= 0; i--) {
    pollen[i].show();
    if (character.collect(pollen[i])) {
      pollen.splice(i, 1);
      points++;
    }
  }
//Points and timer
  fill(255);
  textSize(30);
  textFont("Arial Black");
  text(`Points: ${points}`, 220, 50)
  text(`Time: ${timer}s`, width - 200, 50);
//If statement to check if points is above or equals to 20
  if (points >= 20) {
    gameStart = "win";
    clearInterval(intervalId);
  } else if (timer <= 0) {
    gameStart = "lose";
    clearInterval(intervalId);
  }
}
//Win Screen
function drawWinScreen() {
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(0);
  textFont("Arial Black");
  text("You Win!", width / 2, height / 2 - 50);
  textSize(40);
  text("Press ENTER to Play Again", width / 2, height / 2 + 50);
}
//Lose Screen
function drawLoseScreen() {
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(0);
  textFont("Arial Black");
  text("Time's Up!", width / 2, height / 2 - 50);
  textSize(40);
  text("Collect Again? Press ENTER", width / 2, height / 2 + 50);
}
//keyCode function to start the game and else if to retry if lost
function keyPressed() {
  if (gameStart === "title" && keyCode === ENTER) {
    gameStart = "playing";
    startTime = millis();
    points = 0;
    timer = 120;
    pollen = [];
    intervalId = setInterval(spawnPollen, 3000);
  } else if ((gameStart === "win" || gameStart === "lose") && keyCode === ENTER) {
    gameStart = "title";
  }
}
//Spawns the flowers
function spawnPollen() {
  let newPollen = new Pollen();
  pollen.push(newPollen);
}

class Character {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 50;
  }
//Arrow key interaction for character movement
  move() {
    if (keyIsDown(LEFT_ARROW)) this.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) this.x += 5;
    if (keyIsDown(UP_ARROW)) this.y -= 5;
    if (keyIsDown(DOWN_ARROW)) this.y += 5;
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
//Point gathering for flowers
  collect(pollen) {
    let d = dist(this.x, this.y, pollen.x, pollen.y);
    return (d < this.size / 2 + pollen.size / 2);
  }
}

class Pollen {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = 30;
  }
//End of Code
  show() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.size);
  }
}
