var colors = [];
var size;
var ban;
var notas = [];
function setup() {

    createCanvas(window.innerWidth,window.innerHeight)
    colors[0]=color(122,255,32);
    colors[1]=color(156,132,127);
    colors[2]=color(99,132,213);
    colors[3]=color(212,132,142);
    colors[4]=color(132,221,211);
    size=1;
    ban=true;
    frameRate(60);

    notas = [196.00,220.00,246.94,146.83,246.94,196.00];

    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(200);
    osc.amp(0.2);
    osc.start();

    //delay = new p5.Delay();

}

function draw() {

    fill(255,3);
    rect(0,0,width,height);

    if(mouseIsPressed){
        fill(colors[parseInt(random(5))]);

    }else fill(255);

    if(ban==true){
        size++;
        if(size==100){
            ban=false;
        };
    }else
        if(ban==false){
            size--;
            if(size==0){
            ban=true;
            };
        };

    //osc.freq(mouseX);

    var pos = map(mouseY,0,height,1,0);
    osc.amp(pos);

    if(mouseX>0&&mouseX<=width/6){osc.freq(notas[0]);}
    if(mouseX>width/6&&mouseX<=2*width/6){osc.freq(notas[1]);}
    if(mouseX>2*width/6&&mouseX<=3*width/6){osc.freq(notas[2]);}
    if(mouseX>3*width/6&&mouseX<=4*width/6){osc.freq(notas[3]);}
    if(mouseX>4*width/6&&mouseX<=5*width/6){osc.freq(notas[4]);}
    if(mouseX>5*width/6&&mouseX<=6*width/6){osc.freq(notas[5]);}

    ellipse(mouseX,mouseY,80,80);
    ellipse(width-mouseX,height-mouseY,80,80);
    ellipse(width-mouseX,mouseY,size,size);
    ellipse(mouseX,height-mouseY,size,size);





    //delay.process(osc,.12, 2300);
}
