
function setup() {
createCanvas(800,600);
  frameRate (3);
}

function draw() {
  background(255,235,205);
 
// big black circle
   push();
 translate (width/2, height/2);
 
 fill(0);
 strokeWeight(10);
 stroke(160,82,45);
 ellipse(0,0,300,300);
 
// Numbers 
 textSize(32);
noStroke();
fill(255);
text("12", -20, -100);
text("6", -10, 120);
text("3", 100, 10);
text("9", -125, 6);
   pop();
 
  // rotating circle
    push();
  translate (width/2, height/2);
  var x = 360/12*(frameCount%12);
  rotate(radians(x));
  
  fill(255, 255,255,150);
  noStroke();
  ellipse(110,0,33,33);
    pop();
 
 //hands on the clock 
    push();
  translate (width/2, height/2);
  strokeWeight(2);
  stroke(255);
  
  //big hand on the clock
  line (0 , 0, 0, -91);
  
  //small hand on the clock
  line (0 , 0, 70, 0);
  
  //small circle in the center
  noStroke();
  ellipse(0,0,10,10);
    pop();
  
}