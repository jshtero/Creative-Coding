//Variables
var maxCol = 5;
var maxRow = 6;
var rectD = 60;

//Function Setup
function setup() {
//Canvas Size
  createCanvas (547, 550);
//No Stroke on Rectangles
  noStroke();
  fill (300, 0, 0);
  background (0, 0, 0)
//Collumns
  var xSpacing = (width/maxCol);
  var ySpacing = (height/maxRow);
  translate ( 30, 15 );
  rectMode (CORNER)
//Randomization
  for (var x = 0; x < maxCol; x++){
    for (var y = 0; y < maxRow; y++) {
      
      if (y == 1 || x == 2){
        fill (400, 400, 50);
  
  } else {
    fill ( 400, 400, 400);
  }
  rect( x*xSpacing, y*ySpacing, rectD, rectD);
   }
 }
}
