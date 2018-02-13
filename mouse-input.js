var mySound;
var cnv;
function preload() {
  mySound = loadSound('assets/doorbell.mp3');
}

function setup() { 
  mySound.setVolume(0.1);
  mySound.play();
  cnv = createCanvas(100, 100);
  cnv.mouseOver(Over);
  
}

function draw() {
  if (mySound.isPlaying()) {
    background(240);
  } else {
    background(120);
    textSize(14);
    text('Hover Mouse \n over to Play', 10, 50)
  
  }
}

function Over() {
  mySound.play();
}
