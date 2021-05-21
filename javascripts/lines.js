const MAX_HEIGHT = 600;
const MAX_WIDTH = 600;
const STEP = 16;

const VARIANCE_FACTOR = 100;
const TONES_1 = [[238, 66, 102], [31, 64, 104], [242, 228, 181]];
const TONES_2 = [[37, 106, 220], [31, 64, 104], [169, 251, 215]];
const MONOCHROME = [[0, 32, 63]];

function setup(){
    createCanvas(MAX_HEIGHT, MAX_WIDTH);
    stroke(255, 1, 215);
    strokeWeight(2);
    noLoop();
}

function setup() {
    createCanvas(1000, 1000);
}

var arrTest = [
    [0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0.5, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0],
]

function draw() {
    const lines = [];

    for (let i = 0; i < arrTest.length; i++) {
        let line = [];
        for (let j = 0; j < arrTest[i].length; j++) {
            let point = {x: (j + 3) * 50, y: (i + 3) * 50, z: arrTest[i][j] * 50};
            line.push(point);
        }
        lines.push(line);
    }

    //draw
    for(let i = 0; i < arrTest.length; i++){
        noFill();
        beginShape();
        for(let j = 0; j < arrTest[i].length; j++){
            curveVertex(lines[i][j].x, lines[i][j].y - lines[i][j].z);
        }
        endShape();
    }
}