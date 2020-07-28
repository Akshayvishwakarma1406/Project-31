
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-10,width,10);
	// ground2 = new Ground(width/4,height-10,10,width);
	// ground3 = new Ground(width/3,height-10,10,width);
	// ground4 = new Ground(width/5,height-10,10,width);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
//   ground2.display();
//   ground3.display();
//   ground4.display();

  for(var k = 0;k <= width;k = k + 80){
	divisions.push(new Ground (k,height-divisionHeight/2,10,divisionHeight));
  }

  
  drawSprites();
 
}
