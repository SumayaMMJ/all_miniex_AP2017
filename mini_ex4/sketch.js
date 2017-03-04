var x = 10;
var speed = 3;

var col = { //col = color :)
r: 255,
g: 255,
b: 255,
};

function setup() {
createCanvas(800,600);

 }

 function draw() {

background (113,216, 235);

// "if" statement for the circle to move at a constant speed from one side of the canvas to the other:
if (x > width || x < 0) {


	speed = speed * -1; //to make it go backwards, speed(aka. 3)*-1 will keep it at a constant speed

}

x = x + speed;

// Randomize color each time the circle touches the edge of the canvas:
if (x > width || x < 0) {

	col.r = random (22, 222); //random values of red between the range (22, 222)
	col.g = random (0, 166);
	col.b = random (12, 255);
}
	fill(col.r, col.g, col.b);
    noStroke();
      ellipse(x, 250, 55, 55);
}
