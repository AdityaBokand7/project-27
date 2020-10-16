
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground();
	//Create the Bodies Here.
	
	   bobObject1 = new Bob(520,450,40)
	   bobObject2= new Bob(560,450,40)
	   bobObject3= new Bob(600,450,40)
		bobObject4= new Bob(640,450,40)
		bobObject5= new Bob(680,450,40)

	
	chain1= new Chain(bobObject1.body,ground.body,-80,0);
	chain2= new Chain(bobObject2.body,ground.body,-40,0);
	chain3= new Chain(bobObject3.body,ground.body,0,0);
	chain4= new Chain(bobObject4.body,ground.body,40,0);
	chain5= new Chain(bobObject5.body,ground.body,80,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);

  ground.display();
 
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

bobObject1.display();
 bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-70,y:70});
    }
}

