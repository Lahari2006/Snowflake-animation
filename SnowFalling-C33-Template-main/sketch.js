const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var backgroundImg;
var snow = [];
var rand;

function preload(){
  backgroundImg = loadImage("snow1.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(displayWidth,displayHeight);
 
}

function draw() {
 Engine.update(engine);
  background(backgroundImg);
  rand = Math.round(random(1,4));
  if (frameCount%5 === 0){
    snow.push(new SnowFlake(random(0,1600),30,30))
  }

  for(var j = 0; j<snow.length; j++){
    snow[j].display();
  }
  drawSprites();
}