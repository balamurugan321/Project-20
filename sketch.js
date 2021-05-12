var tom,tomstand,tomsit,tommove;
var jerry,jerrycheer,jerrygift,jerryglass;
var gardenimg;

function preload() {
    //load the images here
    gardenimg = loadImage("images/garden.png");
    
    tomstand = loadAnimation("images/cat4.png");
    tomsit = loadAnimation("images/cat1.png");
    tommove = loadAnimation("images/cat2.png","images/cat3.png");

    jerrygift = loadAnimation("images/mouse1.png");
    jerryglass = loadAnimation("images/mouse4.png");
    jerrycheer = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
    tom = createSprite(width-100,height-100,5,5);
    tom.addAnimation("tomsit",tomsit);
    tom.addAnimation("tommove",tommove);
    tom.addAnimation("tomstand",tomstand);
    tom.scale = 0.15;

    jerry = createSprite(100,height-110,5,5);
    jerry.addAnimation("jerrygift",jerrygift);
    jerry.addAnimation("jerrycheer",jerrycheer);
    jerry.addAnimation("jerryglass",jerryglass);
    jerry.setCollider("rectangle",0,0,30,50);
    jerry.scale = 0.1;
   
}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
        tom.velocityX = 0;
        tom.changeAnimation("tomstand",tomstand);
        jerry.changeAnimation("jerryglass",jerryglass);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
       tom.velocityX = -5;
       tom.changeAnimation("tommove",tommove);
       jerry.changeAnimation("jerrycheer",jerrycheer);
   }

}
