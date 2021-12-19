var mySong, amplitude, play;

function preload(){
    mySong = loadSound('assets/dark.mp3');
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    mySong.play();
    
    amplitude = new p5.Amplitude();
    background(0);

    };

function draw() {
 
    var level = amplitude.getLevel();
    var col = map(level, 0, 1, 0, 255);

    background(0,0,0);
    noStroke(0);

    fill(255,255,255);    

        ellipse(width/2, height/1.9, 300, col*3 );
        ellipse(width-1000, height/1.5, 300, col*3);
        ellipse(width-1560, height/1.5, 300, col*3);
        ellipse(width-1000, height/2.5, 300, col*3);
        ellipse(width-1560, height/2.5, 300, col*3);

        
        fill(col*3,50,60);

        ellipse(width/2, height/1.9, 250, col*3/1.3 );
        ellipse(width-1000, height/1.5, 250, col*3/1.3);
        ellipse(width-1560, height/1.5, 250, col*3/1.3);
        ellipse(width-1000, height/2.5, 250, col*3/1.3);
        ellipse(width-1560, height/2.5, 250, col*3/1.3);

        fill(0,0,0);
        
        ellipse(width/2, height/1.9, col*3/1.3 );
        ellipse(width-1000, height/1.5, col*3/1.3);
        ellipse(width-1560, height/1.5, col*3/1.3);
        ellipse(width-1000, height/2.5, col*3/1.3);
        ellipse(width-1560, height/2.5, col*3/1.3);
   
}