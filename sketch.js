
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
  var options1={
    isStatic:true
   }
   ground=Matter.Bodies.rectangle(400,680, 800,15,options1) 
   World.add(world,ground);
  var options={
    density:0.8
  }
  
  var options2={
    isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    }
   ball= Matter.Bodies.circle(50,10,30, [options2], [109]);
    World.add(world,ball);
    paper=new Paper();
    
    var options3={
      isStatic:false
      }
      box=Matter.Bodies.rectangle(640,670,160,15,options3);
      World.add(world,box);

      var options4={
        isStatic:false
      }
      box1=Matter.Bodies.rectangle(567,600,15,55,options4);
      World.add(world,box1);
   
      var options5={
        isStatic:false
      }
      box2=Matter.Bodies.rectangle(712,617,15,55,options5);
       World.add(world,box2);

	Engine.run(engine);
 
}


function draw() {
  background(0); 
  Engine.update(engine)
 fill("yellow")
 rectMode(CENTER)
  ellipse(ball.position.x,ball.position.y,50,50);
  rect(ground.position.x,ground.position.y,800,20);
  paper.display();
  rect(box.position.x,box.position.y,160,15);
   rect(box1.position.x,box1.position.y,15,55);
   rect(box2.position.x,box2.position.y,15,55);
   drawSprites();
 

}
