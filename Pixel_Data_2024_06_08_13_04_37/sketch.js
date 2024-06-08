var img;
function preload() {
  img = loadImage ("sky.jpeg");
}

function setup(){
  createCanvas(400, 310);
  background(0);

}

function draw() {
  background(0);
  x = mouseX
  y = mouseY
  image(img, 0, 0);
  var c = get (x,y,);
  fill(c);
  rect( x, y, 50, 50,);
}