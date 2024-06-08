//Creates Variables
let wwy; 
let sil; 
//Loads image and font

function preload() {
  wwy = loadImage('ghibli.jpg'); 
  sil = loadFont('ShadowsIntoLight.ttf');
}
//Create Canvas
function setup() {
  createCanvas(600, 400);
//Loads Font
  textFont(sil); 
  textSize(32); 
  fill(255); 
}
//Background color
function draw() {
  background(220);
  image(wwy, 0, 0, width, height);
//Aligns the text
  textAlign(CENTER, CENTER);
//Text
  text("Nothing is forgotten, even if forgotten.", width/2, height/2);
}
