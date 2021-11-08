let mySong, amplitude;

function preload(){
    mySong = loadSound('assets/massiveAttackAngel.mp3')

}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    
    mySong.play();
    
    amplitude = new p5.Amplitude();
}

function draw() {
    let level = amplitude.getLevel();
    let col = map(level,0,1,0,255);
    let shape

    console.log(col);
    
    background(col,0,0);
    fill(255,50,50);

    if (col > 40) {
        fill(255,50,50);
        shape = ellipse(width/2, height/2, col*3);
        ellipse(200, height/2, col*3);
        ellipse(800, height/2, col*3);
        
    } else {
        fill(255,255,255)
        shape = ellipse(width/2, height/2, col*3);
    }
    
}