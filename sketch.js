
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var leftwall
var rightwall
var ground

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	var ball_options={
    restitution:0.9
  }	
	ball= Bodies.circle(100,200,20,ball_options)
	World.add(world,ball)

  ground=new Ground(0,390,800,10)
	Engine.run(engine);
	leftwall=new Ground(250,360,10,100)
	rightwall= new Ground(350,360,10,100)
  
}


function draw() {
  
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.show()
  leftwall.show()
  rightwall.show()
}
  
  function keyPressed(){
	  if (keyCode===UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.04})

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
	  }

  }


