let sWidth=600, sHeight=600;
let boxy;

function setup(){
    createCanvas(sWidth, sHeight);
}

function draw(){
    background(0);
    boxy1=new box(0,0);
    boxy2=new box(60,60);
    boxy3=new box(150,150);
    boxy4=new box(250,250);
    boxy5=new box(350,350);
    boxy6=new box(440,440);
    boxy1.run();
    boxy2.run();
    boxy3.run();
    boxy4.run();
    boxy5.run();
    boxy6.run();
}


//classes
class box{
    constructor(x,y){
    this.x=x+floor(random(0,20));
    this.y=y+floor(random(0,20));
    }
    
    run(){
        fill(random(0,255),random(0,255),random(0,255));
        noStroke();
        rect(this.x,this.y,150,150);
    }
}

