const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine;
var world;
var backgroundImg;
var snowflake;
var snowflakeImg;

function preload(){
  backgroundImg = loadImage("images/snow1.jpg");
  snowflakeImg = loadImage("images/snow4.webp");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
 
}

function draw() {
  background(backgroundImg);
  drawSprites();
}