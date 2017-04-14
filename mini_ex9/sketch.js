var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
var units = '&units=metric';
//devided the url to be able to put them together in a string in line 20
//so i can add "input.value()" to be able to input/write different city names
var weather;
var input;

function setup() {
  createCanvas(800, 600);
  background(255);
  textSize(24);
  text("Temperature in Color", 30, 200);
  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() { //function that displays the website data when "submit" is pressed
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) { //pulling the data from the website
  weather = data;
}

function draw() {
 
  if (weather) {
    var temp = weather.main.temp;
    noStroke();
    ellipse(130, 100, 44, 44);
    //var humidity = weather.main.humidity;
    if(temp <= 5){ 
    fill(30,144,255); //blue color for temperature under 5°C and so on
      
    }else if (temp > 6 && temp < 14) {
    fill(255,215,0); 
      
    }else if (temp > 15 && temp <= 25){
    fill(255,140,0);
      
    }else if (temp > 26){
    fill(255,0,0);
    
      
    }
    
  
  }
}