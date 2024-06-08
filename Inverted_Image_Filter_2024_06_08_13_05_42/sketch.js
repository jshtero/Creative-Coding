//Creates a variable
var wwy;
//Loads the image
function preload() {
  wwy = loadImage ("weatheringwithyou.jpg");
}
//Creates Canvas
function setup() {
createCanvas(300, 400);
background(0);
}
//Draw function
function draw() {
background(0);
image(wwy, 0, 0, wwy.width/2, wwy.height/2);
//Inverted Filter
filter(INVERT)
translate(width/2, height/2);
}
