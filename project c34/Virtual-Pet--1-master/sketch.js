//Create variables here
var dog, happyDog, database, foodStock,foodS;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

dog.createSprite(50,50,250,250);
dog.addImage(dogImg);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImg);
}

  drawSprites();
 text(70,450,"database/foodStock");

}



