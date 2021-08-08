const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box = [];

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    //creating the ground
    ground = new Ground(600,height,1200,20);
    
    //creating the boxes
    box1 = new Box(900, 760, 40, 60);
    box2 = new Box(900, 720, 40, 60);
    box3 = new Box(900, 680, 40, 60);
    box4 = new Box(900, 640, 40, 60);
    box5 = new Box(900, 600, 40, 60);
    box6 = new Box(900, 560, 40, 60);
    box7 = new Box(900, 520, 40, 60);
    box8 = new Box(900, 480, 40, 60);
    box9 = new Box(900, 440, 40, 60);
    box10 = new Box(900, 400, 40, 60);
    box11 = new Box(700, 760, 40, 60);
    box12 = new Box(700, 720, 40, 60);
    box13 = new Box(700, 680, 40, 60);
    box14 = new Box(700, 640, 40, 60);
    box15 = new Box(700, 600, 40, 60);
    box16 = new Box(700, 560, 40, 60);
    box17 = new Box(700, 520, 40, 60);
    box18 = new Box(700, 480, 40, 60);
    box19 = new Box(700, 440, 40, 60);
    box20 = new Box(700, 400, 40, 60);
    
    
    //creating the bird
    ball = new Ball(600,500);
    //creating the rope
    rope = new Rope(ball.body, { x: 350, y: 300 });
}

function draw(){
    background("blue");
   
    Engine.update(engine);
   
    //displaying the boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    //displaying the ball
    ball.display();

    //displayind the rope
    rope.display();

    //displaying the ground
    ground.display();

    
}
function mouseDragged() {
    //set the position of hero when mouse is dragged
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }

