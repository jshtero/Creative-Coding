var font;

function preload() {
  font = loadFont('Comfortaa-Light.ttf');
}

var points;

function setup() {
  createCanvas(600, 400);
  stroke(0);
  points = font.textToPoints('Bath Spa University', 25, 250, 60, { sampleFactor: 0.40 });
  background(0);
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    ellipse(p.x, p.y, 3, 3);
  }
}
