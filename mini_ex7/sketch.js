var buttons = [];
var text1 = [];

function preload(){
  text1 = loadStrings("assets/fil.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 for (var i = 0; i < 11; i++) { 
  buttons[i] = createButton('! ! ! !');
  buttons[i].position();
  buttons[i].mousePressed(addText);

  } 
  
}

function draw() {
 //console.log(mouseX, mouseY);//used console.log to find the buttons positions

	buttons[0].position(540, 120);
	buttons[1].position(540, 140);
	buttons[2].position(540, 160);
	buttons[3].position(540, 180);
	buttons[4].position(540, 200);
	buttons[5].position(540, 220);
	buttons[6].position(540, 240);
	buttons[7].position(540, 260);
  buttons[8].position(540, 280);
	
	buttons[9].position(540, 320);
	buttons[10].position(540, 340);
      
     
}

function addText(){
 
  textSize(22); 
      fill(0);
 
 var ind = floor(random(text1.length));
    text(text1[0], random(width), random(height), random(width), random(height));
 
  shuffle(text1, true);

   
 }