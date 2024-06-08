//Variable
let chart;
//Preloads the csv file
function preload() {
  chart = loadTable('MostPlayed.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(255);
  textAlign(CENTER, CENTER);
// text size and font
  textSize(24);
  textStyle(BOLD);
  textFont("times");
  fill(0);
//Text at the top
  text("MY PHONE APPS SCREEN TIME USAGE", width / 2, 50);
// Margin
  let x = 100; 
  let y = 100;
//Width and height of chart
  let chartWidth = width - 2 * x; 
  let chartHeight = height - 2 * y;

  drawTheBars(x, y, chartWidth, chartHeight, chart);
}

function drawTheBars(x, y, width, height, data) {
  let maxValue = 0;
  let values = [];

// Finding the values
  for (let i = 0; i < data.getRowCount(); i++) {
    let value = float(data.getString(i, 1).replace('%', ''));
    values.push({ key: data.getString(i, 0), value: value });
    maxValue = max(maxValue, value);
  }

  let barWidth = width / values.length;

  // Basically just darws the chart
  for (let i = 0; i < values.length; i++) {
    let key = values[i].key;
    let value = values[i].value;
    let barHeight = map(value, 0, maxValue, 0, height);
    let xPos = x + i * barWidth;
    let yPos = y + height - barHeight;
  //Color of the bars
    let barColor = color(0, 0, 255); 
    fill(barColor);
    rect(xPos, yPos, barWidth - 10, barHeight);

    fill(0);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(12);
    text(key, xPos + barWidth / 2, y + height + 10);
  }
}
