//Variable
let wwy; 
let maskg; 
//Preloads the image
function preload() {
  wwy = loadImage('wutheringwaves.jpg'); 
}
//Creats the Canvas
function setup() {
  createCanvas(800, 400);

  maskg = createGraphics(wwy.width, wwy.height);
//White filler
  maskg.fill(255);  
//No Borderline
  maskg.noStroke(); 
  maskg.rect(maskg.width / 2, maskg.height / 2 + -100, 400, 700);
  
  wwy.mask(maskg);
}
//Background Color
function draw() {
  background('#CECECE'); 

  image(wwy, 0, 0);
}
