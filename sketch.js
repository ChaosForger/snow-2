const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var snow=[]

function preLoad() {

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  backgroundImg = loadImage("snow1.jpg")
  engine = Engine.create();
  world = engine.world;
  
  for(var i = 0; i<500; i++){
snow.push(new Snow(random(0, 800),random(0,100),random(10,40)))

  }
}

function draw() {

    Engine.update(engine);
    background(backgroundImg);
    for (var j = 0;j<snow.length;j++){
      snow[j].display();
      
    }
    
}