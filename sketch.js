const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,gamestate;
var box1;
var plinko=[]
var lilo=[]
var g=[]
var t=[]
var linko=[]
var ilo=[]
var go=[]
var to=[]

function setup(){
    var canvas = createCanvas(500,565);
    engine = Engine.create();
    world = engine.world;
    gamestate=1
   ball=new Ball(100,100)
   re=new R(60,520,10,90)
   oe=new R(120,520,10,90)
   me=new R(180,520,10,90)
   he=new R(240,520,10,90)
   be=new R(300,520,10,90)
   de=new R(360,520,10,90)
   ue=new R(250,560,500,10)

   for(i=20;i<500;i=i+50){
    plinko.push(new Ball(i,100))

   }
   for(i=20;i<500;i=i+50){
    lilo.push(new Ball(i,200))

   }
   for(i=20;i<500;i=i+50){
    g.push(new Ball(i,300))

   }
   for(i=20;i<500;i=i+50){
    t.push(new Ball(i,400))

   }
  
   for(i=20;i<500;i=i+50){
    linko.push(new All(i,150))

   }
   for(i=20;i<500;i=i+50){
    ilo.push(new All(i,250))

   }
   for(i=20;i<500;i=i+50){
    go.push(new All(i,350))

   }
   for(i=20;i<500;i=i+50){
    to.push(new All(i,450))

   }
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ball.display()
    re.display()
    oe.display()
    me.display()
    he.display()
    be.display()
    de.display()
    ue.display()
    

    for(var i=0;i<lilo.length;i++){
        lilo[i].display()
    }
    for(var i=0;i<plinko.length;i++){
        plinko[i].display()
    }

    for(var i=0;i<lilo.length;i++){
        g[i].display()
    }
    for(var i=0;i<lilo.length;i++){
        t[i].display()
    }
    for(var i=0;i<lilo.length;i++){
        ilo[i].display()
    }
    for(var i=0;i<plinko.length;i++){
        linko[i].display()
    }

    for(var i=0;i<lilo.length;i++){
        go[i].display()
    }
    for(var i=0;i<lilo.length;i++){
        to[i].display()
    }
    
    
    

}




