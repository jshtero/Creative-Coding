var img;
function preload() {
  img = loadImage ("watermelon.jpeg");
}

function setup(){
  createCanvas(400, 400);
  background(0);
  noStroke();

}

function draw() {
  x = random(width);
  y = random(height);
  var c = img.get(x,y);
  fill(c);
 fill(c[0], c[1], c[2], 200);
  rect(x, y, 30, 30);
}