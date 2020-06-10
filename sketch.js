const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//var 
function setup()
{
    var canvas = createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;
    
    
    //level two
    block8 = new Block3(530, 235, 30, 40);
    block9 = new Block3(560, 235, 30, 40);
    block10 = new Block3(590, 235, 30, 40);
    block11 = new Block3(620, 235, 30, 40);
    block12 = new Block3(650, 235, 30, 40);
    //level three
    block13 = new OneBlock(560, 195, 30, 40);
    block14 = new OneBlock(590, 195, 30, 40);
    block15 = new OneBlock(620, 195, 30, 40);
    //top
    block16 = new Block(590, 155, 30, 40);
    block20 = new attacker(200, 200, 50, 50);

    //borders

    ground = new Ground(600, 400, 800, 1);
    ground1 = new Ground(802, 200, 1, 400);
    ground2 = new Ground(400, 1, 800, 1);
    ground3 = new Ground(1, 200, 1, 400);



    platform = new Ground(585, 256, 200, 10);

    slingshot = new SlingShot(block20.body, {x:200, y:200});
}

function draw()
{
    background(255);
    Engine.update(engine);

    platform.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block20.display();
    slingshot.display();

    strokeWeight(4);
}

 function mouseDragged(){
     Matter.Body.setPosition(block20.body, {x: mouseX , y: mouseY});
 }


 function mouseReleased(){
     slingshot.fly();
 }

 function keyPressed(){
    if(keyCode === 32){
        block20.x = 200;
        block20.y = 200;
        slingshot.attach(block20.body);
    }
}