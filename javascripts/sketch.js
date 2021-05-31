const MAX_HEIGHT = 180;
const MAX_WIDTH = 1106;

function setup(){
    let cnv = createCanvas(MAX_WIDTH, MAX_HEIGHT);
    cnv.parent('clock-holder');
    stroke(8, 255, 131);
    frameRate(1);
    strokeWeight(2);
}

let currentTime = "00:00";
let nextTime = "00:00";
let lines = [];

function draw() {
    let date = new Date();
    let hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
    let minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    nextTime = hours + ":" + minutes;
    if (nextTime !== currentTime) {
        currentTime = nextTime;
        lines = [];
        lines = writeCoords(currentTime);
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