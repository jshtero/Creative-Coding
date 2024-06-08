function setup(){
  createCanvas(600, 600);
  background(50, 0, 255);
  stroke(255);
  fill(0);
}

function draw(){
  if (mouseIsPressed){
    translate (mouseX, mouseY);
    for (var i = 0; i < 10; i++){
      strokeWeight(i);
      point(0, i * 10)
    }
  }
}

