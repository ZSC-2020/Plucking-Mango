const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  boy=loadImage("boy.png");
  bg=loadImage("Background.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  tree1=new tree(100,500)
ground=new ground(windowWidth/2,500,)
mango1= new mango(850,300,30)
mango2= new mango(800,500,30)
mango3= new mango(1200,400,30)
mango4= new mango(1000,270,30)
mango5= new mango(900,350,30)
mango6= new mango(700,450,30)
stone1=new stone(225,570,60)
sling=new slingshot(stone1.body,{x:225,y:570})
}


function draw() {
  rectMode(CENTER);
  background(bg);
  tree1.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  image(boy,200,500,200,300);
  stone1.display();
  sling.display();

detect(stone1,mango1);
detect(stone1,mango2);
detect(stone1,mango3);
detect(stone1,mango4);
detect(stone1,mango5);
detect(stone1,mango6);
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
{sling.fly()};

}
 function detect(s,m){
 posm=m.body.position;
 poss=s.body.position;
 var distance=dist(posm.x,posm.y,poss.x,poss.y);
if(distance<=m.r+s.r){
  Matter.Body.setStatic(m.body,false)

}

 }


