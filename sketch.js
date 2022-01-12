var background2,sleep,brush,gym,eat,drink,move;
var edges;
function preload(){
  background2 = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png", "images/gym12.png", "images/gym11.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut = createSprite(400,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

  
}

function draw() {
  background(background2); 
  fill("white");
  textSize (20);
  text("Instrucciones",30,30);
  text("Flecha hacia arriba = cepillarse", 20,60);
  text("Flecha hacia abajo = ejercicio",20,80);
  text("Flecha hacia la izquierda = bañarse",20,100);
  text("Flecha hacia la derecha = comer",20,120);
  text("m para mover al astronauta",20,140);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
  
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("ejercicio", gym);
  astronaut.changeAnimation("ejercicio");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bañarse", bath);
  astronaut.changeAnimation("bañarse");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("comer",eat);
  astronaut.changeAnimation("comer");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}

if(keyDown("m")){
  astronaut.addAnimation("mover", move);
  astronaut.changeAnimation("mover");
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}

  drawSprites();
}