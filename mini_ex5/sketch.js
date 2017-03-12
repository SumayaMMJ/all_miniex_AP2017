var mySound;
var lexicon;
var words = []
      words [0] = "Never gonna";
      words [1] = "give";
      words [2] = "you up";
      //seceond sentence in the sketch
      words [3] = " ";
      words [4] = "Never gonna";
      words [5] = "let";
      words [6] = "you";
      words [7] = "down";


function preload() {
   mySound = loadSound("assets/music.mp3");

}
function setup() {
mySound.setVolume(0.5);
mySound.play();

createCanvas(800,600);
console.log();
lexicon = RiLexicon();

}


function mouseClicked(){ //Event: change the verb "give"

 if (words[1] == "give") { //using words[i] doesnt work insted of the number doesn't work
 	
 	words[1] = lexicon.removeWord(words[1]) && lexicon.randomWord("vb");  
     }

     //using the same if-statement to say, if words[1] does not equal "give"
     // then remove the word and add a random verb
     //i spent 6 hours trying to figure this shit out
if (words[1] != "give") { 
	words[1] = lexicon.removeWord(words[1]) && lexicon.randomWord("vb"); 
}

if (words[7] == "down") { 
 	words[7] = lexicon.removeWord(words[7]) && lexicon.randomWord("vb");  
     }

if (words[7] != "down") { 
	words[7] = lexicon.removeWord(words[7]) && lexicon.randomWord("vb"); 
}
 }
 
  function draw() {
background(0);

for (var i=0; i<words.length; i++){
//Light rosy text
push();
translate (CENTER);
textStyle(BOLD);
fill (255,217,241);
textSize(36);
textAlign(LEFT);
text(words[i], (width/2), (height/3)+50*i);
pop();

//Pink text
push();
translate (CENTER);
textSize(36)
fill (255,0,144, 55);
textAlign(RIGHT);
text (words[i], (width/2)-33, (height/3)+50*i);
pop();

}}



