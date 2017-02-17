function setup() {
createCanvas(700,630);

}
var value = 0;
function draw() {
  background(0);
   
 //Normal 
   fill(255);
   rect(100,100,150,150);
   rect(400,400,150,150);
   rect(400,100,150,150);
   rect(100,400,150,150);

//Glitch
  
  fill(value);
  noStroke();
  rect(100,100,150,150);
}

function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}