
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
	createCanvas(484,800);

	engine = Engine.create();
	world = engine.world;

	// noStroke();
	ground = new Ground(width/2,height-5,width,10);
	groundL = new Ground(0,height/2,10,height);
	groundR = new Ground(480,height/2,10,height);
	circl = new Particle(200,0);

	for(var k = 0;k <= width;k = k + 80){
		divisions.push(new Ground(k,height-divisionHeight/2,10,divisionHeight));
	}

	for(var j = 40;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,57));
	}

	for(var j = 15;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,125));
	}

	for(var j = 40;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,197));
	}

	for(var j = 15;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,265));
	}

	for(var j = 40;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,337));
	}

	for(var j = 15;j<= width-10;j=j+50){
		plinkos.push(new Plinko(j,405));
	}

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
  circl.display();

  for(var k = 0; k < divisions.length; k++ ){
	divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++ ){
	plinkos[j].display();
  }  
  
  for(var j = 0; j < particles.length; j++ ){
	particles[j].display();
  }

  if(frameCount % 90 === 0){
	particles.push(new Particle(random(width/2-10,width/2+10),0));
  }

  ground.display();
  drawSprites();
 
}

// function mouseDragged(){
//     Matter.Body.setPosition(circl.body, {x: mouseX , y: mouseY});
// }