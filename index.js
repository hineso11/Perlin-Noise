
var pn = null;
const PARENT_ID = "drawingArea";

function setup () {
    pn = new PerlinNoise(PARENT_ID, 1800, 800, 73);
}

// Drawing code for canvas
function draw() {

    pn.draw();
}