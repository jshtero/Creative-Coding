//Variable
let microphone;
//Canvas, Background Color, Stroke color, Stroke weight
function setup() {
  createCanvas(600, 400);
  background(255);
  stroke(255);
  noFill();
  strokeWeight(5);
//Audio Input
  microphone = new p5.AudioIn();
  microphone.start();
}
//Background
function draw() {
  background(0);
//Draws the line
  translate(0, height / 2);
  beginShape();
//Measure Mic Level Input
  let noiseCount = 0;
  let microphoneLevel = microphone.getLevel();
  let noiseIncrement = map(microphoneLevel, 0, 1, 0.02, 0.2); 
  for (let i = 0; i < width; i += 1) {
    let ranY = noise(noiseCount);
    vertex(i, ranY * 100);
    noiseCount += noiseIncrement; 
  }
  endShape();
}
