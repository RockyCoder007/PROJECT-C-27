const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var cradle1,cradle2,cradle3,cradle4,cradle5;
var ball1,ball2,ball3,ball4,ball5;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(420,400);
    engine = Engine.create();
    world = engine.world;
    ball1=new Ball(110,350);
    ball2=new Ball(160,350);
    ball3=new Ball(210,350);
    ball4=new Ball(260,350);
    ball5=new Ball(400,320);


    
    cradle1 = new Cradle(ball1.body,{x:110, y:100});
    cradle2 = new Cradle(ball2.body,{x:160, y:100});
    cradle3 = new Cradle(ball3.body,{x:210, y:100});
    cradle4 = new Cradle(ball4.body,{x:260, y:100});
    cradle5 = new Cradle(ball5.body,{x:310, y:100});
}

function draw(){
    background("grey");
    rect(85,75,250,50);
    Engine.update(engine);
    strokeWeight(4);
    ball1.display();
    cradle1.display();
    ball2.display();
    cradle2.display();
    ball3.display();
    cradle3.display();
    ball4.display();
    cradle4.display();
    ball5.display();
    cradle5.display(); 
}