const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  paper=new Paper(200,450,80);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  paper.display();
  drawSprites();
}