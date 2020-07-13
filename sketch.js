//Create variables here
var dog, happyDog
var database
var foodS, foodStock

function preload()
{
  //load images here
  dogImg=loadImage("Dog.png");
  happyDogImg=loadImage("happydog.png");
}

function setup() {
  database=firebase.database();

  createCanvas(500,500);
  
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on('value',readStock);

}

function draw() {
  background(46, 139, 87);  

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foods=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;

  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



