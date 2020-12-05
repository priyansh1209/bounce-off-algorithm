var movingRect,fixedRect

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(350, 200, 100, 60);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(30,200,70,100)
  movingRect.shapeColor = "blue";
 
}

function draw() {
  background(25,35,45);  
  
  if(keyWentDown("space") && movingRect.x === 30 && movingRect.y === 200 && fixedRect.x === 350 && fixedRect.y === 200){
    movingRect.velocityX = 10;
    fixedRect.velocityX = -10; 
    
} 

if( movingRect.x-fixedRect.x <= fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2
  && fixedRect.y-movingRect.y <=  fixedRect.height/2+movingRect.height/2
  && movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2){

    
        movingRect.velocityX = -10
        fixedRect.velocityX = 10
        movingRect.velocityY = -10
        fixedRect.velocityY = 10
        

}

if(keyWentDown("space") && movingRect.x === 200 && movingRect.y === 350 && fixedRect.x === 200 && fixedRect.y === 30){
    movingRect.velocityY = -10;
    fixedRect.velocityY = 10; 
  }

  if(keyWentDown("w")){

    movingRect.y = 350
    movingRect.x = 200
    fixedRect.y =  30
    fixedRect.x = 200
  } 
  
  
            
  
  //  if(fixedRect.y-movingRect.y <=  fixedRect.height/2+movingRect.height/2
  //       && movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2){
  //      movingRect.velocityY = -10
  //        fixedRect.velocityY = 10
  //    }
  
  
  // if(movingRect.x-fixedRect.x <= fixedRect.width/2+movingRect.width/2
  //   && fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2
  //   && fixedRect.y-movingRect.y <=  fixedRect.height/2+movingRect.height/2
  //   && movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2){

 
  drawSprites();
  }