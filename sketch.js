var px = 0;
var py = 0;
var ax = 0;
var ay = 0;
var vx = 0;
var vy = 0;
var sp = 0.02;
var gr = 0.8;
var i = "tilt to draw, shake to clear";
var sh = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  px = windowWidth / 2;
  py = windowHeight / 2;
  noStroke();
  background(45, 36, 30);
  angleMode(DEGREES);
}

function draw() {
  var size = pow(windowWidth * windowHeight, 0.15);

  fill(80, 64, 54);
  textSize(size * 2.5);
  textAlign(RIGHT);
  text(i, width - size * 1.25, height - size * 1.25);

  if (frameCount % 6 === 0) {
    background(45, 36, 30, 15);
  }

  move();
  fill(33, 131, 196, 127);
  ellipse(px + size / 2, py + size / 2, size);

  fill(117, 188, 229, 127);
  push();
  translate(width, 0);
  scale(-1, 1);
  ellipse(px + size / 2, py + size / 2, size);
  pop();

  fill(179, 239, 249, 127);
  push();
  translate(0, height);
  scale(1, -1);
  ellipse(px + size / 2, py + size / 2, size);
  pop();

  fill(227, 249, 248, 127);
  push();
  translate(width, height);
  scale(-1, -1);
  ellipse(px + size / 2, py + size / 2, size);
  pop();

  //dbUG();
}

function deviceShaken() {
  sh = sh + 5;
  if (sh > 25) {
    sh = 0;
    background(45, 36, 30);
    i = '';
  }
}

function move() {
  var size = pow(windowWidth * windowHeight, 0.15);
  ax = rotationX;
  ay = rotationY;

  vx = vx + ay;
  vy = vy + ax;
  py = py + vy * sp;
  px = px + vx * sp;

  if (px < 0) {
    px = 0;
    vx = -vx * gr;
  }
  if (py < 0) {
    py = 0;
    vy = -vy * gr;
  }
  if (px > width - size) {
    px = width - size;
    vx = -vx * gr;
  }
  if (py > height - size) {
    s = true;
    py = height - size;
    vy = -vy * gr;
  }
}

function dbUG() {
  var db = pow(windowWidth * windowHeight, 0.25);

  stroke(255, 127);
  fill(0, 127);
  rect(db * 0.25, height - db * 3.5, db * 2, db * 3.25);
  noStroke();
  fill(255);
  textAlign(LEFT);
  textSize(db / 3);
  text('px:\t' + round(px), db * 0.5, height - db * 3.0);
  text('py:\t' + round(py), db * 0.5, height - db * 2.5);
  text('ax:\t' + ax.toFixed(1), db * 0.5, height - db * 2.0);
  text('ay:\t' + ay.toFixed(1), db * 0.5, height - db * 1.5);
  text('vx:\t' + round(vx), db * 0.5, height - db * 1.0);
  text('vy:\t' + round(vy), db * 0.5, height - db * 0.5);
}

// PALETTE
// raisin black            45, 36, 30
// cyan cornflower blue    33, 131, 196
// aero                    117, 188, 229
// diamond                 179, 239, 249
// light cyan              227, 249, 248