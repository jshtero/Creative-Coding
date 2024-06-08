//Preset variables
let x = 200; 
let y = 200; 
let w = 200; 
let h = 200; 
//Create Canvas
function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(0, 20, 60);
  noStroke();
  // Face of the alien
  fill(0, 255, 0);
  ellipse(x, y, w, h);
  fill(0);
  //Alien Body
  rect(100, 290, w, h);
  // Left eye of the alien
  fill(255);
  ellipse(x - w / 6, y - h / 4, w / 6, h / 6);
  // Right eye of the alien
  ellipse(x + w / 6, y - h / 4, w / 6, h / 6);
  //Pupil Left
  fill(0);
  ellipse(x - w / 6, y - h / 4, w / 9, h / 9)
  //Pupil Right
  fill(0);
  ellipse(x + w / 6, y - h / 4, w / 9, h / 9);
  // Nose of the alien
  fill(0);
  ellipse(x, y + h / 8, w / 18, h / 18);
  // Mouth of the alien
  ellipse(x, y + h / 3, w / 8, h / 32); 
  // Left ear of the alien
  fill(0);
  ellipse(x - w / 2.5, y - h / 2.5, w / 8, h / 4); 
  // Right ear of the alien
  ellipse(x + w / 2.5, y - h / 2.5, w / 8, h / 4); 
  }
