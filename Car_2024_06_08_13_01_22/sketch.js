function setup(){
  createCanvas(400,400);
}

function draw(){
  background(125, 0, 125);


//Body color for the car
fill (65, 0, 120);
//Main Body for the car
rect(60, 220, 180, 80);
//No Outline
noStroke();
//Top of the car
rect(80, 160, 150, 90);
//Front of the car
triangle(240, 220, 290, 300, 200, 300);
//Wheels
fill(0);
ellipse(100, 300, 60, 60);
ellipse(220, 300, 60, 60);
//Inner Wheels
fill(255);
ellipse(100, 300, 40, 40);
ellipse(220, 300, 40, 40)
//Black Windows
fill(0);
rect(90, 170, 60, 40);
rect(160, 170, 60, 40);}