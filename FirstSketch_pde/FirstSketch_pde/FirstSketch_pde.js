let CanvasSize = 2800;
let Increment = 0;
let Size = 1;
let ShapeRatio = 1;


function setup() {
    createCanvas(CanvasSize, CanvasSize);
    initialize();
  background(120);
}

function draw(){
    translate(CanvasSize * 0.5, CanvasSize * 0.5);
    rotate(frameCount);
    translate(frameCount,0);
    if(frameCount%1<1.5){
    fill(53-random(200), 80, 112)
  } else{
    fill(229-random(200), 107, 111)  
 }
    
    //Definieren der Quadrate 1-9
    let xPosition = Size * 0.5;
    let xPosition2 = Size * 0.5;
    let yPosition = Size * 0.5;
    let yPosition2 = Size * 0.5;
    
    let xPosition3 = Size * -0.5;
    let xPosition4 = Size * -0.5;
    let yPosition3 = Size * -0.5;
    let yPosition4 = Size * -0.5;
  
    let xPosition5 = Size / -2;
    let xPosition6 = Size / 2;
    let yPosition5 = Size / -2;
    let yPosition6 = Size / 2;
  
    let xPosition7 = Size / 2;
    let xPosition8 = Size / -2;
    let yPosition7 = Size / 2;
    let yPosition8 = Size / -2;
    
    let xPosition9 = Size / -1;
    let xPosition10 = Size / -4;
    let yPosition9 = Size / 2;
    let yPosition10 = Size / 2;
    
    let xPosition11 = Size / -4;
    let xPosition12 = Size / -1;
    let yPosition11 = Size / 2;
    let yPosition12 = Size / 2;
    
    let xPosition13 = Size / 4;
    let xPosition14 = Size / 1;
    let yPosition13 = Size / -2;
    let yPosition14 = Size / -2;
    
    let xPosition15 = Size / 1;
    let xPosition16 = Size / 4;
    let yPosition15 = Size / -2;
    let yPosition16 = Size / -2;
    
  
    let currentSize = Size * ShapeRatio;
    
    //quadrate definieren mit Positionen
    rect(xPosition, xPosition2, yPosition, yPosition2);
    rect(xPosition3, xPosition4, yPosition3, yPosition4);
    rect(xPosition5, xPosition6, yPosition5, yPosition6);
    rect(xPosition7, xPosition8, yPosition7, yPosition8);
    rect(xPosition9, xPosition10, yPosition9, yPosition10);
    rect(xPosition11, xPosition12, yPosition11, yPosition12);
    rect(xPosition13, xPosition14, yPosition13, yPosition14);
    rect(xPosition15, xPosition16, yPosition15, yPosition16);
    
    
     Size += Increment;
    
  if (Size > CanvasSize) {
        initialize();
    }
}

function initialize() {
    background(128);
    randomColor();
    stroke(random(0, 255), random(0, 255), random(0, 255));
    Size = 0,
    Increment = random(0, 1);
    if (Increment == 0) { initialize(); }
    ShapeRatio = random(0, 1);
    if (ShapeRatio == 0) { initialize(); }
}

function randomColor() {
    fill(random(255), random(255), random(255));
}
