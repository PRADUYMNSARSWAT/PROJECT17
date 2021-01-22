var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var player1,player2,player3;
var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  pinkcyc();
    yellowcyc();
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
 }
}
function pinkcyc(){
  player1= createSprite(1000,Math.round(random(50,250)));
player1.addAnimation("player1",mainRacerImg1)
  player1.velocityX= -10;
pinkGroup.add(player1)  
}
function yellowcyc(){
  player2= createSprite(1000,Math.round(random(50,250)));
player2.addAnimation("player2",mainRacerImg2)
  player2.velocityX= -10;
yellowGroup.add(player2)  
}


