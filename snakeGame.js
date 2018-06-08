var s;
var scl = 20;

var food;

function setup() {
  createCanvas( 600, 600);
  s = new Snake();
  frameRate(15);
  food = createVector(random(width) random(height));
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl); 
}

function draw() {
  background(51);
  s.update();
  s.shows();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0,1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1,0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1,0);
  }
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
}

this.dir = function(x,y) {
  this.xspeed = x;
  this.yspeed = y;
}

this.update = function() {
  this.x = this.x + this.xspeed*scl;
  this.y = this.y + this.yspeed*scl;

  this.x = constrain(this.x, 0, width-scl);
  this.y = constrain(this.y, 0, height-scl);
}

this.show = function() {
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);

}

this.show = function() {
  fill(255);w
  rect(this.x, this.y, 10,10);
}
