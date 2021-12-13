
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var wall1;
var wall2;
var ball;
var btn;
var wall3,wall4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = 
	{
		isStatic:false,
		restitution: 0.1,
		friction:0,
		density:1.2
	};

	var ground_options =
	{
		isStatic: true,
	};

	//Create the Bodies Here.
	ball = Bodies.circle(200,500,20,ball_options);
	World.add(world,ball);

	ground = Bodies.rectangle(400,650,800,30,ground_options);
	World.add(world,ground);

	wall1 = Bodies.rectangle(500,600,20,150,ground_options);
	World.add(world,wall1);

	wall2 = Bodies.rectangle(700,600,20,150,ground_options);
	World.add(world,wall2)

	wall3 = Bodies.rectangle(30,350,20,700,ground_options);
	World.add(world,wall3);

	wall4 = Bodies.rectangle(780,350,20,700,ground_options);
	World.add(world,wall4)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

   ellipse(ball.position.x,ball.position.y,20);
   rect(ground.position.x,ground.position.y,800,50);
   rect(wall1.position.x,wall1.position.y,20,100);
   rect(wall2.position.x,wall2.position.y,20,100);
	rect(wall3.position.x,wall3.position.y,50,700)
	rect(wall4.position.x,wall4.position.y,50,700)
	
	if (keyCode === UP_ARROW)
	{
		force();
		console.log("applied force")
	}

   drawSprites();
  Engine.update(engine);
}

function force()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-7})
}

