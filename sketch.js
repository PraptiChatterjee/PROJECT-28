const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, tree;
var boyImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var stone;
var chain;

function preload()
{
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1400,20);

    tree = new Tree(1050,300,450,600);

    mango1 = new Mango(1100,105,35,35);
    mango2 = new Mango(1000,92,35,35);
    mango3 = new Mango(1050,200,35,35);
    mango4 = new Mango(955,164,35,35);
    mango5 = new Mango(1220,270,35,35);
    mango6 = new Mango(915,280,35,35);
    mango7 = new Mango(980,250,35,35);
    mango8 = new Mango(1160,220,35,35);
    mango9 = new Mango(1175,155,35,35);
    mango10 = new Mango(900,215,35,35);

    stone = new Stone(240,445,45,45);
    chain = new Chain(stone.body,{x:240, y:445});

	Engine.run(engine);
  
}


function draw() {
	background("yellow");
    Engine.update(engine);

    image(boyImg, 200,365,200,300);

    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);
    detectCollision(stone,mango6);
    detectCollision(stone,mango7);
    detectCollision(stone,mango8);
    detectCollision(stone,mango9);
    detectCollision(stone,mango10);
    
    ground.display();
	  tree.display();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();

    stone.display();
    chain.display();
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(stone.body, {x:235, y:420});
  chain.attach(stone.body);
}
}

function detectCollision(stone,mango){
  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false);
  }
}

