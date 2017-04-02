var drops = [];
var slider;

function setup() {
   createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();//calling the constructor function Drop from the "drop.js" sketch
  }

  slider = createSlider(0, 30, 25); //Slider range
  slider.style('width', '80px');

}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }

  var val = slider.value();
  frameRate(val); //Slider that controls the Framerate

}

