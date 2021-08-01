var garden,rabbit;
var gardenImg,rabbitImg;
var AppleImg;
var leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
 
  var rand = Math.round(random(1,2));
  if (frameCount%80 ==0){
    if (rand == 1){
      createApples();
    }
    else{
      createLeaves();
    }
  }
  
  drawSprites();
}
function createApples(){
Apple = createSprite(random(50,350),40,10,10);
Apple.addImage(AppleImg)
Apple.lifetime=50;
Apple.scale=0.1
Apple.velocityY=5
rabbit.depth=Apple.depth;
rabbit.depth++
}

function createLeaves(){
leaves = createSprite(random(50,350),40,10,10);
leaves.addImage(leafImg)
leaves.lifetime=50;
leaves.scale=0.1
leaves.velocityY=5
rabbit.depth=leaves.depth;
rabbit.depth++
} 



