const MAX_HEIGHT = 300;

function setup(){
    let cnv = createCanvas(windowWidth, MAX_HEIGHT);
    cnv.parent('clock-holder');
    stroke(8, 255, 131);
    frameRate(2);
    strokeWeight(2);
}

var currentTime = "00:00";
var nextTime = "00:00";
var lines = [];

function draw() {
    let date = new Date();
    nextTime = date.getHours() + ":" + date.getMinutes();
    if (nextTime !== currentTime) {
        currentTime = nextTime;
        lines = [];
        lines = writeCoords(currentTime);
        console.log(currentTime);
    }

    //draw
    clear();
    for(let i = 0; i < lines.length; i++){
        noFill();
        beginShape();
        for(let j = 0; j < lines[i].length; j++){
            curveVertex(lines[i][j].x, lines[i][j].y - 0.9 * lines[i][j].z);
        }
        endShape();
    }
}