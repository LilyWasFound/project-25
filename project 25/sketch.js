const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paperObject;
var binObject;
var groundObject;

function setup() {
	var canvas = createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(200,450,70);
	groundObject = new Ground(width/2,670,width,20);
	binObject = new Bin(1200,650);
		Engine.run(engine);
	 }


function draw() {
  background(0);
  
 paperObject.display();
 groundObject.display();
 binObject.display();
}

function keyPressed(){ 
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
	} 
}

