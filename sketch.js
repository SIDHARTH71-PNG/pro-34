//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var DogImage;

function preload()
{
  //load images here
  DogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {

  database = firebase.database();

  createCanvas(500, 500);

  var dog = createSprite(250,270);
  dog.addImage(DogImage);
  dog.scale = 0.3;
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW))
  {
    writeStock(food);
    dog.addImage(happyDog);
  }
  drawSprites();

  //add styles here
  textFont("Times New Roman");
  textSize(27);
  fill(255);
  stroke(0);
  strokeWeight(2);
  text("Food Remaining : " + Food, 150,150);
  text("Press UP_ARROW to feed Drago Milk !!!",15,40);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{

  if(x == 0)
  {
    x = 0
  }
  else
  {
    x = x-1
  }
  database.ref('/').update({
    Food:x
  })
}
 
