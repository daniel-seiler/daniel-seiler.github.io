var drawClock = function(p) {
    const MAX_HEIGHT = 180;
    const MAX_WIDTH = 735;
    const Z_AXIS_OFFSET = 0.9;
    let currentTime = "00:00";
    let nextTime = "00:00";
    let lines = [];

    p.setup = function(){
        p.createCanvas(MAX_WIDTH, MAX_HEIGHT);
        //p.parent('clock-holder');
        p.stroke(8, 255, 131);
        p.strokeWeight(2);
        p.frameRate(0.03);
        p.draw();
    };

    p.draw = function() {
        let date = new Date();
        let hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
        let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
        nextTime = hours + ":" + minutes;
        if (nextTime !== currentTime) {
            currentTime = nextTime;
            lines = [];
            lines = writeCoords(currentTime);
        }

        //draw clock
        p.clear();
        for(let i = 0; i < lines.length; i++){
            p.noFill();
            p.beginShape();
            for(let j = 0; j < lines[i].length; j++){
                p.curveVertex(lines[i][j].x, lines[i][j].y - Z_AXIS_OFFSET * lines[i][j].z);
            }
            p.endShape();
        }
    };
};

var p5Clock = new p5(drawClock, 'clock-holder');
