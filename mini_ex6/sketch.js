var r = 0;
var circ = 22;
var posX = [];
var posY = [];
var status = "up"
function setup(){

	createCanvas(windowWidth,windowHeight);
	noFill();
	frameRate(26);

//size of the circles
	sizeW = width/2;
	sizeH = height/2;
//for loop to make random circles at random places
	for (var i = 0; i < circ; i++) { 
        posX[i] = random(width);
	}

	for (var i = 0; i < circ; i++) {
		posY[i] = random(height);
	}

}

function draw (){

	background(102, 204, 255);
	 
	 //the loop that creates more ripples/circles
	 for (var i = 0; i < circ; i++) {
	 circle(posX[i], posY[i], sizeW, sizeH);
     
    }

//to ensure you can freeze the ripples from expanding
    if (status == "up") {
  	r+=0.01;      
  }
  
  }   


function mousePressed(){//stop the ripples from expanding

	if (circle >= windowWidth, windowHeight){
       status++;
        }
    }


function circle (x,y, width, height){
	noFill();
	stroke(0,153,204);
	ellipse(x, y, width*r+44, height*r);
}




