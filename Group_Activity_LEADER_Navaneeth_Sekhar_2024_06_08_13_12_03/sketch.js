let welcomeTexts = []; // variable
let bathspaTexts = []; // variable
let numWelcomeTexts = 10; // how many would fall
let numBathspaTexts = 10; // how many would fall
let ellipseRadius = 50; // ellipse

function setup() {
  createCanvas(windowWidth, windowHeight); //canva


  for (let i = 0; i < numWelcomeTexts; i++) {
    let x = random(width);
    let y = random(-height, 0);
    let speed = random(1, 5);
    welcomeTexts.push(new FallingText(x, y, speed, "Welcome", color(255)));
  }
// this whole code makes the falling texts
  // Create falling texts for "Bathspa"
  for (let i = 0; i < numBathspaTexts; i++) {
    let x = random(width);
    let y = random(-height, 0);
    let speed = random(1, 5);
    bathspaTexts.push(new FallingText(x, y, speed, "Bathspa", color(0, 0, 100)));
  }
}

function draw() {
  let bgColor = lerpColor(color(208, 106, 107), color(156, 233, 184), frameCount / 1000);
  background(bgColor); //animation background to switch one color to another

  // to loop, but it just brings back the texts back up
  for (let i = 0; i < welcomeTexts.length; i++) {
    welcomeTexts[i].update();
    welcomeTexts[i].display();
    handleCollision(welcomeTexts[i]);
  }

  // same with the previous one
  for (let i = 0; i < bathspaTexts.length; i++) {
    bathspaTexts[i].update();
    bathspaTexts[i].display();
    handleCollision(bathspaTexts[i]);
  }

  // the ellipse
  fill(255, 0, 0, 100);
  ellipse(mouseX, mouseY, ellipseRadius * 2);

  // Text settings for main text
  textAlign(CENTER, CENTER);
  textSize(45);
  stroke(0);
  strokeWeight(2);
  fill(76, 184, 234);
  text('Welcome To Bathspa University!', width / 2, height / 2);
}

class FallingText {
  constructor(x, y, speed, content, textColor) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.content = content;
    this.textColor = textColor;
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-height, 0);
      this.x = random(width);
    }
  }

  display() {
    fill(this.textColor);
    textSize(24);
    text(this.content, this.x, this.y);
  }
}

function handleCollision(textObject) {
  let d = dist(textObject.x, textObject.y, mouseX, mouseY);
  if (d <= ellipseRadius + 5) { 
    textObject.speed *= -1; // Reverse the direction upon collision
  }
}